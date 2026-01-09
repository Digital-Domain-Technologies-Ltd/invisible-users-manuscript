#!/bin/bash

# Post-tool-use hook for manuscript repository
# This hook runs after certain tool uses
# Note: This is a submodule - main workflow management happens in parent repository

# Get the tool name and check if it was a Bash tool with git commands
TOOL_NAME="$1"
TOOL_OUTPUT="$2"

# Only proceed if this was a Bash tool
if [ "$TOOL_NAME" != "Bash" ]; then
    exit 0
fi

# Check if the command involved git push in manuscript
if echo "$TOOL_OUTPUT" | grep -q "git push"; then
    echo ""
    echo "💡 Reminder: Update submodule pointer in parent repository after pushing manuscript:"
    echo "   cd ../.."
    echo "   git add invisible-users/manuscript"
    echo "   git commit -m 'Update manuscript submodule to latest version'"
    echo "   git push origin main"
    echo ""
fi

exit 0
