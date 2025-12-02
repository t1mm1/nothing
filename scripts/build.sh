#!/bin/bash

cd "$(dirname "$0")/.."

if command -v ddev &> /dev/null && ddev describe &> /dev/null 2>&1; then
    echo "🔧 Building with DDEV..."
    ddev exec "cd web/themes/custom/nothing && npm run build"
else
    echo "🔧 Building locally..."
    npm run build
fi
