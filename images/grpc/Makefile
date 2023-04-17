defs:
	cd contracts && bash ./compile.sh
.PHONY: defs

fullcatalog:
	mkdir -p ./defs
	cd contracts && \
		protoc \
		--descriptor_set_out=../fullcatalog.pb \
		$$(find . -name '*.proto')
.PHONY: fullcatalog

getknowntypes:
	rm -rf ./contracts/google
	rm -rf ./tmp
	mkdir -p ./tmp && \
	 	cd ./tmp && \
	 	git clone --depth=1 https://github.com/protocolbuffers/protobuf.git
	mv ./tmp/protobuf/src/google ./contracts
	rm -rf ./contracts/google/protobuf/compiler
	find ./contracts/google -type f | grep -v '\.proto' | xargs rm
	find ./contracts/google -type f | grep 'unittest' | xargs rm
	find ./contracts/google -type d -empty -delete
	rm -rf ./tmp
.PHONY: getknowntypes

gentrainscert:
	# create CA for signing client:
	openssl req -newkey rsa:2048 \
		-new -nodes -x509 \
		-days 3650 \
		-out ./trains/certs/ca.crt \
		-keyout ./trains/certs/ca.key \
		-subj "/C=SO/ST=Earth/L=Mountain/O=Krakend/OU=KrakendPlayground/CN=localhost" 
	# create client certificate
	openssl genrsa -out ./trains/certs/client.key 2048
	openssl req -new -key ./trains/certs/client.key \
		-out ./trains/certs/client.csr \
    	-subj "/C=SO/ST=Earth/L=Mountain/O=Krakend/OU=KrakendPlayground/CN=localhost"
	openssl x509 -req -in ./trains/certs/client.csr \
		-extfile <(printf "subjectAltName=DNS:localhost") -CA ./trains/certs/ca.crt -CAkey ./trains/certs/ca.key \
		-out ./trains/certs/client.crt \
		-days 3650 -sha256 -CAcreateserial
	# create server certificate
	go run $$GOROOT/src/crypto/tls/generate_cert.go \
		--rsa-bits 1024 \
		--host 127.0.0.1,::1,localhost \
		--ca \
		--start-date "Jan 1 00:00:00 1970" \
		--duration=1000000h
	mv cert.pem ./trains/certs/server_cert.pem
	mv key.pem ./trains/certs/server_key.pem
.PHONY: gentrainscert

genflights:
	cd contracts && \
	protoc \
		--go_out=../genlib \
		--go_opt=paths=source_relative \
		--go-grpc_out=../genlib \
		--go-grpc_opt=paths=source_relative \
		lib/*.proto \
		flights/*.proto
.PHONY: genflights

gentrains:
	cd contracts && \
	protoc \
		--go_out=../genlib \
		--go_opt=paths=source_relative \
		--go-grpc_out=../genlib \
		--go-grpc_opt=paths=source_relative \
		lib/*.proto \
		trains/*.proto
.PHONY: gentrains

flights_server:
	echo "build flights server"
.PHONY: flights_server


trains_server:
	echo "build trains server"
.PHONY: trains_server
