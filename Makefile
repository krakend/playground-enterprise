.PHONY: start start-with-ai-gateway stop restart logs compile-flexible-config check-ai-credentials elastic audit check

start:
	docker compose build web && docker compose up -d
	@echo ""
	@echo "  Playground is up. AI Gateway endpoints (/llm-*, /prompt-guardrail-*) won't"
	@echo "  work without provider credentials and the prompt-guard container."
	@echo "  To enable them, run:  make start-with-ai-gateway"
	@echo ""

start-with-ai-gateway: check-ai-credentials compile-flexible-config
	docker compose --profile ai-gateway build prompt-guard web
	docker compose --profile ai-gateway up -d
	@echo ""
	@echo "  Playground is up with AI Gateway enabled."
	@echo ""

check-ai-credentials:
	@MISSING=""; \
	for K in GEMINI_API_KEY OPENAI_API_KEY ANTHROPIC_API_KEY; do \
	    VAL=""; \
	    if [ -f ./config/krakend/.env.local ]; then \
	        VAL=$$(grep -E "^$$K=" ./config/krakend/.env.local | head -1 | cut -d= -f2-); \
	    fi; \
	    if [ -z "$$VAL" ] && [ -f ./config/krakend/.env ]; then \
	        VAL=$$(grep -E "^$$K=" ./config/krakend/.env | head -1 | cut -d= -f2-); \
	    fi; \
	    if [ -z "$$VAL" ] || [ "$$VAL" = "<env_local_empty_credential>" ]; then \
	        MISSING="$$MISSING $$K"; \
	    fi; \
	done; \
	if [ -n "$$MISSING" ]; then \
	    echo ""; \
	    echo "  [!] Missing or placeholder AI credentials:$$MISSING"; \
	    echo "      Set them in config/krakend/.env.local (preferred, git-ignored)"; \
	    echo "      or in config/krakend/.env (tracked — watch out for leaks)."; \
	    echo "      To start from the template:"; \
	    echo "        cp config/krakend/.env config/krakend/.env.local"; \
	    echo "        # then edit .env.local with real keys"; \
	    echo ""; \
	    exit 1; \
	fi
	@echo "  [OK] AI credentials resolved from .env.local or .env"

stop:
	docker compose --profile ai-gateway down --volumes --remove-orphans

restart:
	docker compose restart

logs:
	docker compose logs -f logstash

compile-flexible-config:
	@if [ ! -f ./config/krakend/.env.local ]; then \
        echo ""; \
        echo "  [!] config/krakend/.env.local not found."; \
        echo "      LLM credentials will be compiled as placeholders and AI Gateway"; \
        echo "      endpoints (/llm-*, /prompt-guardrail-*) will fail at runtime."; \
        echo "      To enable them:"; \
        echo "        cp config/krakend/.env config/krakend/.env.local"; \
        echo "        # then edit .env.local with your GEMINI / OPENAI / ANTHROPIC keys"; \
        echo ""; \
    fi
	docker run \
        --env-file ./config/krakend/.env \
        $$([ -f ./config/krakend/.env.local ] && echo "--env-file ./config/krakend/.env.local") \
        -v "$(PWD)/config/krakend/:/etc/krakend/" \
        -e "FC_DEBUG=true" \
        -e "FC_CONFIG=/etc/krakend/fc_config.json" \
        krakend/krakend-ee \
        check -c extended/krakend.tmpl

check:
	docker run \
        -v "$(PWD)/config/krakend/:/etc/krakend/" \
        krakend/krakend-ee \
        check -d -t -c krakend.json --lint

audit:
	docker run \
        -v "$(PWD)/config/krakend/:/etc/krakend/" \
        krakend/krakend-ee \
        audit -c krakend.json

elastic:
	curl -X POST "localhost:5601/api/saved_objects/_import" -H "kbn-xsrf: true" --form file=@config/telemetry-dashboards/kibana/dashboard.ndjson -H "kbn-xsrf: true"

save-keycloak-config:
	docker compose exec keycloak sh -c "cp -rp /opt/keycloak/data/h2 /tmp; \
        /opt/keycloak/bin/kc.sh export --dir /opt/keycloak/data/import \
        --realm krakend \
        --users realm_file \
        --db dev-file --db-url 'jdbc:h2:file:/tmp/h2/keycloakdb;NON_KEYWORDS=VALUE'"
