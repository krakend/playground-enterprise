// mocked_apis — single small HTTP server that backs every mocked endpoint
// the playground needs: REST static files (JSON, anything in /data),
// a GraphQL POST handler that resolves an ownership lookup by LEI, and a
// SOAP POST handler that resolves a sanctions screening by LEI.
//
// The fixtures live under /data on the container filesystem (mounted by
// docker-compose from the repo's data/ directory). Adding a new mocked
// REST file is "drop a JSON in data/"; adding a new ownership/sanctions
// scenario is "drop a JSON or XML in data/kyc/{ownership,sanctions}/".
//
// Stdlib-only by design: no go.mod deps, no framework, FROM scratch image.
package main

import (
	"encoding/json"
	"io"
	"log"
	"net/http"
	"os"
	"path/filepath"
	"regexp"
	"strings"
)

const (
	dataRoot     = "/data"
	listenAddr   = ":8091"
	ownershipDir = "kyc/ownership"
	sanctionsDir = "kyc/sanctions"
)

var leiInSoap = regexp.MustCompile(`<lei>\s*([^<\s]+)\s*</lei>`)

// GET /health — liveness probe.
func handleHealth(w http.ResponseWriter, _ *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	_, _ = w.Write([]byte(`{"status":"ok"}`))
}

// POST /graphql — minimal GraphQL backend. Reads `variables.lei` (or
// `variables.code`) from the JSON body and returns the matching ownership
// fixture wrapped in a `{"data":{"ownership":...}}` envelope.
func handleGraphQL(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	var body struct {
		Variables map[string]string `json:"variables"`
	}
	if err := json.NewDecoder(r.Body).Decode(&body); err != nil {
		http.Error(w, "invalid JSON body", http.StatusBadRequest)
		return
	}
	lei := body.Variables["lei"]
	if lei == "" {
		lei = body.Variables["code"]
	}
	if lei == "" {
		http.Error(w, "missing variables.lei", http.StatusBadRequest)
		return
	}

	raw, err := readFixture(ownershipDir, lei+".json")
	if err != nil {
		http.Error(w, "no ownership data for "+lei, http.StatusNotFound)
		return
	}

	out, err := json.Marshal(struct {
		Data struct {
			Ownership json.RawMessage `json:"ownership"`
		} `json:"data"`
	}{Data: struct {
		Ownership json.RawMessage `json:"ownership"`
	}{Ownership: raw}})
	if err != nil {
		http.Error(w, "marshal error", http.StatusInternalServerError)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	_, _ = w.Write(out)
}

// POST /soap/sanctions — minimal SOAP backend. Pulls the LEI out of the
// XML body with a regex (no XML parser needed for a fixture-driven mock)
// and returns the matching sanctions XML verbatim.
func handleSOAPSanctions(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodPost {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	body, err := io.ReadAll(r.Body)
	if err != nil {
		http.Error(w, "read body", http.StatusBadRequest)
		return
	}
	m := leiInSoap.FindSubmatch(body)
	if m == nil {
		http.Error(w, "missing <lei> in SOAP body", http.StatusBadRequest)
		return
	}
	lei := string(m[1])

	raw, err := readFixture(sanctionsDir, lei+".xml")
	if err != nil {
		http.Error(w, "no sanctions data for "+lei, http.StatusNotFound)
		return
	}
	w.Header().Set("Content-Type", "application/xml")
	_, _ = w.Write(raw)
}

// GET /<anything> — serve any file under /data as a static asset, exactly
// like a plain file server. POSTs to unknown paths fall through to 405.
func handleStatic(w http.ResponseWriter, r *http.Request) {
	if r.Method != http.MethodGet && r.Method != http.MethodHead {
		http.Error(w, "method not allowed", http.StatusMethodNotAllowed)
		return
	}
	rel := strings.TrimPrefix(r.URL.Path, "/")
	if rel == "" {
		http.NotFound(w, r)
		return
	}
	full, ok := safeJoin(dataRoot, rel)
	if !ok {
		http.NotFound(w, r)
		return
	}
	info, err := os.Stat(full)
	if err != nil || info.IsDir() {
		http.NotFound(w, r)
		return
	}
	http.ServeFile(w, r, full)
}

// safeJoin returns base/rel only if the result is still under base, to
// guard against `..` segments escaping the data root.
func safeJoin(base, rel string) (string, bool) {
	clean := filepath.Join(base, rel)
	if !strings.HasPrefix(clean, base+string(filepath.Separator)) && clean != base {
		return "", false
	}
	return clean, true
}

func readFixture(subdir, name string) ([]byte, error) {
	full, ok := safeJoin(filepath.Join(dataRoot, subdir), name)
	if !ok {
		return nil, os.ErrNotExist
	}
	return os.ReadFile(full)
}

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/health", handleHealth)
	mux.HandleFunc("/graphql", handleGraphQL)
	mux.HandleFunc("/soap/sanctions", handleSOAPSanctions)
	mux.HandleFunc("/", handleStatic)

	log.Printf("mocked_apis listening on %s (data root: %s)", listenAddr, dataRoot)
	if err := http.ListenAndServe(listenAddr, mux); err != nil {
		log.Fatalf("listen: %v", err)
	}
}
