FROM rust:1.75.0 as builder

WORKDIR /usr/src/app

COPY . .

RUN cargo install --path .

CMD ["rust-api-axum"]
