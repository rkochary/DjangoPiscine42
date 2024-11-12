#!/bin/sh

# Check if a URL is provided as an argument
if [ -z "$1" ]; then
  echo "Usage: $0 <bit.ly link>"
  exit 1
fi

# Fetch the headers and find the redirection URL
curl -Is "$1" | grep -i '^location: ' | cut -d ' ' -f2
