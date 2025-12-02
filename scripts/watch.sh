#!/bin/bash

cd "$(dirname "$0")/.."

if command -v ddev &> /dev/null && ddev describe &> /dev/null 2>&1; then
    echo "👀 Watching with DDEV..."
    ddev exec "cd web/themes/custom/nothing && npm run dev"
else
    echo "👀 Watching locally..."
    npm run dev
fi
