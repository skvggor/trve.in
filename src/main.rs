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

fn get_status(time: String, day: String) -> String {
    /* Status:
        - sleep: 00:00 - 07:59
        - lunch: 12:00 - 14:00
        - weekend: Saturday, Sunday
        - work: 08:00 - 18:00
        - free: 18:01 - 23:59
    */

    let mut status: String = "".to_string();

    let sleep: bool = time >= "00:00".to_string() && time < "07:59".to_string();
    let lunch: bool = time >= "12:00".to_string() && time < "14:00".to_string();
    let weekend: bool = day == "Saturday".to_string() || day == "Sunday".to_string();
    let work: bool = time >= "08:00".to_string() && time < "18:00".to_string();
    let free: bool = time >= "18:01".to_string() && time < "23:59".to_string();

    if sleep {
        status = "sleep".to_string();
    } else if lunch {
        status = "lunch".to_string();
    } else if weekend {
        status = "weekend".to_string();
    } else if work {
        status = "work".to_string();
    } else if free {
        status = "free".to_string();
    }

    status
}

async fn response_json() -> Json<Status> {
    let current_time: String = get_utc_time();
    let current_day: String = get_week_day();

    let current_status: String = get_status(current_time.clone(), current_day);

    let status: Status = Status {
        time: current_time,
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

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_get_utc_time() {
        let utc_time: String = get_utc_time();
        assert_eq!(utc_time.len(), 5);
    }

    #[test]
    fn test_get_status() {
        [
            (
                "00:00".to_string(),
                "Monday".to_string(),
                "sleep".to_string(),
            ),
            (
                "12:00".to_string(),
                "Monday".to_string(),
                "lunch".to_string(),
            ),
            (
                "08:00".to_string(),
                "Monday".to_string(),
                "work".to_string(),
            ),
            (
                "18:01".to_string(),
                "Monday".to_string(),
                "free".to_string(),
            ),
            (
                "00:00".to_string(),
                "Saturday".to_string(),
                "sleep".to_string(),
            ),
            (
                "12:00".to_string(),
                "Saturday".to_string(),
                "lunch".to_string(),
            ),
            (
                "08:00".to_string(),
                "Saturday".to_string(),
                "weekend".to_string(),
            ),
            (
                "18:01".to_string(),
                "Saturday".to_string(),
                "weekend".to_string(),
            ),
            (
                "00:00".to_string(),
                "Sunday".to_string(),
                "sleep".to_string(),
            ),
            (
                "12:00".to_string(),
                "Sunday".to_string(),
                "lunch".to_string(),
            ),
            (
                "08:00".to_string(),
                "Sunday".to_string(),
                "weekend".to_string(),
            ),
            (
                "18:01".to_string(),
                "Sunday".to_string(),
                "weekend".to_string(),
            ),
        ]
        .iter()
        .for_each(|(time, day, expected)| {
            assert_eq!(
                get_status(time.to_string(), day.to_string()),
                expected.to_string()
            )
        });
    }

    #[tokio::test]
    async fn test_response_json() {
        let response: Json<Status> = response_json().await;
        assert_eq!(response.time.len(), 5);
        assert_eq!(
            response.status == "sleep"
                || response.status == "lunch"
                || response.status == "weekend"
                || response.status == "work"
                || response.status == "free",
            true
        );
    }
}
