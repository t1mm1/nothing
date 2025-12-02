#!/bin/bash

cd "$(dirname "$0")/.."

if command -v ddev &> /dev/null && ddev describe &> /dev/null 2>&1; then
    echo "📦 Installing with DDEV..."
    ddev exec "cd web/themes/custom/nothing && npm install"
else
    echo "📦 Installing locally..."
    npm install
fi
