use chrono::prelude::*;
use dotenvy::dotenv;
use std::env;
use std::net::SocketAddr;

use serde::Serialize;

use axum::{routing::get, Json, Router};

#[derive(Serialize)]
struct Time {
    utc_current_time: String,
}

async fn current_time() -> Json<Time> {
    let utc_current_time: String = Utc::now().format("%H:%M:%S").to_string();
    let time: Time = Time { utc_current_time };
    Json(time)
}

#[tokio::main]
async fn main() {
    dotenv().expect("Failed to load .env file");

    let app: Router = Router::new().route("/", get(current_time));

    let host: String = env::var("HOST").unwrap();
    let port: String = env::var("PORT").unwrap();

    let address: String = format!("{host}:{port}");

    let default_address: SocketAddr = "0.0.0.0:3000".parse::<SocketAddr>().unwrap();

    let final_addr: SocketAddr = if let Ok(curr) = address.parse::<SocketAddr>() {
        curr
    } else {
        default_address
    };

    axum::Server::bind(&final_addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
