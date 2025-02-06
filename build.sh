#!/bin/bash

# Install Bun
curl -fsSL https://bun.sh/install | bash

# Set environment variables for Bun
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"

# Install dependencies and build the project
bun install
bun run build
