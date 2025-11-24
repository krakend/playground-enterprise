FROM golang:1.23-alpine AS builder

COPY ./ /app
WORKDIR /app
RUN go build -o server ./main.go

FROM scratch
COPY --from=builder /app/server /server
COPY --from=builder /app/index.html /index.html
EXPOSE 8888
CMD [ "/server" ]
