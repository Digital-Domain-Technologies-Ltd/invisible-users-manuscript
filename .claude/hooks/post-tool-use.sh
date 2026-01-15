#!/bin/bash

# Post-tool-use hook for manuscript repository
# This hook runs after certain tool uses
# Note: This is a submodule - main workflow management happens in parent repository

# Get the tool name and file path
TOOL_NAME="$1"
TOOL_OUTPUT="$2"
FILE_PATH="$3"

# Function to run markdown linting and fixing
lint_and_fix_markdown() {
    local file="$1"

    # Skip if file doesn't exist or isn't a markdown file
    if [ ! -f "$file" ] || [[ ! "$file" =~ \.md$ ]]; then
        return 0
    fi

    # Skip CHANGELOG files
    if [[ "$file" =~ CHANGELOG ]] || [[ "$file" =~ CHANGELOG-FULL ]]; then
        return 0
    fi

    echo ""
    echo "📝 Auto-linting markdown file: $file"

    # Run markdownlint fix
    if npx markdownlint --fix "$file" 2>/dev/null; then
        # Check if there are still errors
        if npx markdownlint "$file" 2>/dev/null; then
            echo "✅ Markdown linting passed"
        else
            echo "⚠️  Some markdown issues require manual fixing"
            echo "   Run: npx markdownlint \"$file\" to see details"
        fi
    else
        echo "⚠️  Markdown linting encountered issues"
    fi
    echo ""
}

# Handle Edit and Write tool operations on markdown files
if [ "$TOOL_NAME" = "Edit" ] || [ "$TOOL_NAME" = "Write" ]; then
    if [ -n "$FILE_PATH" ]; then
        lint_and_fix_markdown "$FILE_PATH"
    fi
fi

# Handle Bash tool for git operations reminder
if [ "$TOOL_NAME" = "Bash" ]; then
    # Check if the command involved git push in manuscript
    if echo "$TOOL_OUTPUT" | grep -q "git push"; then
        echo ""
        echo "💡 Reminder: Update submodule pointer in parent repository after pushing manuscript:"
        echo "   cd ../../.."
        echo "   git add packages/manuscript/manuscript"
        echo "   git commit -m 'Update manuscript submodule pointer to latest version'"
        echo "   git push  # Pushes to current branch"
        echo ""
    fi
fi

exit 0
