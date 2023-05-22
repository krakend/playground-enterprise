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
		-config ./trains/certs/openssl.cnf 
	# create server private key
	openssl genrsa -out ./trains/certs/server.key 2048
	# create a signing request
	openssl req -new -key \
		./trains/certs/server.key \
		-out ./trains/certs/server.csr \
		-config ./trains/certs/openssl.cnf
	# create SSL certificate:
	openssl x509 -req -in ./trains/certs/server.csr \
		-extfile ./trains/certs/cert.cnf \
		-CA ./trains/certs/ca.crt \
	    -CAkey ./trains/certs/ca.key \
		-out ./trains/certs/server.cert \
		-days 3650 -sha256 -CAcreateserial
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
