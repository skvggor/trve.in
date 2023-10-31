use std::env;
use std::net::SocketAddr;
use dotenvy::dotenv;

use axum::{
    routing::get,
    Router,
};

#[tokio::main]
async fn main() {
    dotenv().expect("Failed to load .env file");

    let app = Router::new()
        .route("/", get(|| async { "Hello, World!" }));

    let host = env::var("HOST").unwrap();
    let port = env::var("PORT").unwrap();

    let address = format!("{host}:{port}");

    let default_address = "0.0.0.0:3000"
        .parse::<SocketAddr>()
        .unwrap();

    let final_addr = if let Ok(curr) = address.parse::<SocketAddr>() {
        curr
    } else {
        default_address
    };

    axum::Server::bind(&final_addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
