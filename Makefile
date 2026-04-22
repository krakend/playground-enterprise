.PHONY: start stop restart logs compile-flexible-config elastic audit check

start:
	docker compose build web && docker compose up -d

stop:
	docker compose down --volumes

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
