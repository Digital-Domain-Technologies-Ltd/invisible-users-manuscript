#!/bin/bash

# Pre-commit hook for manuscript repository
# This hook runs before git commit operations
# Note: This is a submodule - npm scripts run from parent repository

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    exit 0
fi

# Get list of staged markdown files
staged_md_files=$(git diff --cached --name-only --diff-filter=ACM | grep '\.md$')

if [ -z "$staged_md_files" ]; then
    # No markdown files staged, exit successfully
    exit 0
fi

echo ""
echo "📝 Manuscript repository pre-commit check"
echo ""
echo "Staged markdown files:"
echo "$staged_md_files" | sed 's/^/  - /'
echo ""
echo "Note: To run markdown linting, use from parent repository:"
echo "  cd ../.. && npm run lint:markdown"
echo ""

exit 0
