FROM golang:1.17.11
RUN mkdir /app
WORKDIR /app
COPY . .
RUN GOPROXY=https://goproxy.io go get -d -v ./...
RUN go build ./cmd/server
EXPOSE 4243
CMD ["./server"]
