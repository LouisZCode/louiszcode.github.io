#!/bin/bash

# Deploy script for LouisZCode.github.io

echo "⏳ Starting deployment process..."

# Check if we have uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
  echo "📝 Committing changes to repository..."
  git add .
  git commit -m "Update website content and projects"
else
  echo "✓ No changes to commit"
fi

# Push to GitHub
echo "🚀 Pushing to GitHub Pages..."
git push origin main

# Check if the push was successful
if [ $? -eq 0 ]; then
  echo "✅ Deployment successful! Your site will be live at https://louiszcode.github.io shortly."
  echo "⏱️ It may take a few minutes for changes to propagate."
else
  echo "❌ Deployment failed. Please check the error messages above."
  exit 1
fi

echo ""
echo "📊 Deployment Statistics:"
echo "------------------------"
echo "📁 Total files: $(find . -type f -not -path "*/\.*" | wc -l)"
echo "💾 Total size: $(du -sh . | cut -f1)"
echo "🖼️ Images: $(find ./images -type f -name "*.svg" -o -name "*.png" | wc -l)"
echo "📄 HTML pages: $(find . -name "*.html" | wc -l)"
echo ""
echo "Thank you for using the deployment script! 🎉"
