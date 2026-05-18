# Multi-stage build. The dependency layer is cached separately from the
# source layer so a code-only change rebuilds in <1s and never re-downloads
# anything (the service is stdlib-only — no deps to download — but we keep
# the layout so adding deps later doesn't change the cache story).

# ─── builder ───
FROM golang:1.23-alpine AS build
WORKDIR /src
COPY go.mod ./
RUN go mod download
COPY main.go ./
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-s -w" -o /out/mocked_apis main.go

# ─── runtime ───
# Scratch is enough: the binary is fully static (CGO_ENABLED=0) and reads
# fixtures from /data which is mounted at runtime via docker-compose.
FROM scratch
COPY --from=build /out/mocked_apis /mocked_apis
EXPOSE 8091
ENTRYPOINT ["/mocked_apis"]
