FROM rust:1.75.0 as builder

WORKDIR /usr/src/app

COPY . .

CMD ["./bin/rust-api-axum"]
