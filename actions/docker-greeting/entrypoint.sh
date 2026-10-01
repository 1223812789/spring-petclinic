#!/bin/sh
set -eu

message="${INPUT_MESSAGE:-Hello from Docker action}"

printf '%s\n' "Message received in Docker action: ${message}"

if [ -n "${GITHUB_OUTPUT:-}" ]; then
  printf '%s\n' "output-message=${message}" >> "${GITHUB_OUTPUT}"
else
  printf '%s\n' "output-message=${message}"
fi
