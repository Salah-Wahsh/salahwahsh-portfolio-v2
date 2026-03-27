#!/bin/sh
# Auto Capitalize the first letter of the commit header only

commit_file="$1"

# Read the first line (header)
header=$(head -n 1 "$commit_file")

# Extract prefix and the rest
prefix=$(echo "$header" | sed -E 's/^(\[[A-Z]+-[0-9]+\] [a-z]+\([a-z-]+\): ).*/\1/')
rest=$(echo "$header" | sed -E 's/^(\[[A-Z]+-[0-9]+\] [a-z]+\([a-z-]+\): )//')

# Capitalize the first letter of the rest if it's not empty
if [ -n "$rest" ]; then
  first_char=$(echo "$rest" | cut -c1 | tr '[:lower:]' '[:upper:]')
  remaining=$(echo "$rest" | cut -c2-)
  capitalized_header="${prefix}${first_char}${remaining}"
else
  capitalized_header="$header"
fi

# Read the rest of the commit message (body, etc.)
body=$(tail -n +2 "$commit_file")

# Write the final message back
{
  echo "$capitalized_header"
  echo ""
  echo "$body"
} > "$commit_file"

# Run commitlint
npx --no-install commitlint --edit "$commit_file"