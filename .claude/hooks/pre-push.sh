#!/bin/bash

# Pre-push hook for manuscript repository
# This hook runs before git push operations
# Note: This is a submodule of the main invisible-users repository

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    exit 0
fi

# Check for uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "⚠️  WARNING: You have uncommitted changes in manuscript repository."
    echo ""
    read -p "Continue with push anyway? (y/N) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

echo "ℹ️  Reminder: After pushing manuscript changes, update submodule pointer in parent repository:"
echo "  cd ../../.."
echo "  git add packages/manuscript/manuscript"
echo "  git commit -m 'Update manuscript submodule pointer to latest version'"
echo "  git push  # Pushes to current branch"
echo ""

exit 0
