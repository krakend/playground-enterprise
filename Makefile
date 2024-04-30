.PHONY: start stop restart logs compile-flexible-config elastic audit check

start:
	docker-compose up -d

stop:
	docker-compose down --volumes

restart:
	docker-compose restart

logs:
	docker-compose logs -f logstash

compile-flexible-config:
	docker run \
        -v "$(PWD)/config/krakend/:/etc/krakend/" \
        -e "FC_DEBUG=true" \
        -e "FC_CONFIG=/etc/krakend/fc_config.json" \
        krakend/krakend-ee \
        check -c extended/krakend.tmpl


check:
	docker run -it \
        -v "$(PWD)/config/krakend/:/etc/krakend/" \
        krakend/krakend-ee \
        check -d -t -c krakend.json --lint

audit:
	docker run -it \
        -v "$(PWD)/config/krakend/:/etc/krakend/" \
        krakend/krakend-ee \
        audit -c krakend.json

elastic:
	curl -X POST "localhost:5601/api/saved_objects/_import" -H "kbn-xsrf: true" --form file=@config/telemetry-dashboards/kibana/dashboard.ndjson -H "kbn-xsrf: true"
