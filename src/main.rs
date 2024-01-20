use chrono::prelude::*;
use dotenvy::dotenv;
use std::env;
use std::net::SocketAddr;

use serde::Serialize;

use axum::{routing::get, Json, Router};

#[derive(Serialize)]
struct Status {
    time: String,
    status: String,
}

fn get_now() -> DateTime<Utc> {
    let now: DateTime<Utc> = Utc::now();
    now - chrono::Duration::hours(3)
}

fn get_utc_time() -> String {
    let utc_time: String = get_now().format("%H:%M").to_string();
    utc_time
}

fn get_week_day() -> String {
    let week_day: String = get_now().format("%A").to_string();
    week_day
}

fn get_status() -> String {
    /*
        Status:
        - work: 08:00:00 - 18:00:00
        - lunch: 12:00:00 - 14:00:00
        - sleep: 00:00:00 - 06:00:00
        - weekend: Saturday, Sunday
    */

    let utc_time: String = get_utc_time();
    let week_day: String = get_week_day();
    let mut status: String = "none".to_string();

    let work: bool = utc_time >= "08:00:00".to_string() && utc_time < "18:00:00".to_string();
    let lunch: bool = utc_time >= "12:00:00".to_string() && utc_time < "14:00:00".to_string();
    let sleep: bool = utc_time >= "00:00:00".to_string() && utc_time < "06:00:00".to_string();
    let weekend: bool = week_day == "Saturday".to_string() || week_day == "Sunday".to_string();

    if weekend {
        status = "weekend".to_string();
    } else if sleep {
        status = "sleep".to_string();
    } else if lunch {
        status = "lunch".to_string();
    } else if work {
        status = "work".to_string();
    }

    status
}

async fn response_json() -> Json<Status> {
    let current_status: String = get_status();

    let status: Status = Status {
        time: get_utc_time(),
        status: current_status,
    };

    Json(status)
}

#[tokio::main]
async fn main() {
    dotenv().expect("Failed to load .env file");

    let route: String = "/rust-api/api/v1".to_string();

    let app: Router = Router::new()
        .route(&(route.clone() + "/status"), get(response_json))
        .route(&(route + "/healthcheck"), get(|| async { "ok" }));

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

    println!("Server running on http://{}", final_addr);
}
