#!/bin/bash

if ! command -v cargo &>/dev/null; then
  echo "cargo could not be found"
  exit
fi

if ! command -v rustc &>/dev/null; then
  echo "rustc could not be found"
  exit
fi

if ! command -v rustup &>/dev/null; then
  echo "rustup could not be found"
  exit
fi

rustc --version
cargo --version

# build
cargo build --release
cp target/release/rust-api-axum bin
