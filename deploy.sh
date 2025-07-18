#!/bin/bash

echo "🔧 Building Astro site..."
npm run build || {
  echo "❌ Build failed. Exiting."
  exit 1
}

echo "🧹 Cleaning dist-deploy folder..."
cd ../dist-deploy || {
  echo "❌ Could not find dist-deploy folder. Exiting."
  exit 1
}

# Remove all files (Git-tracked and untracked)
git rm -rf . > /dev/null 2>&1 || true
git clean -fdx

echo "🚚 Copying files from Astro build (dist/)..."
rsync -av ../sadgrl.online/dist/ ./

echo "📦 Committing and pushing to dist branch..."
git add .
git commit -m "Deploy from source commit $(git --git-dir=../sadgrl.online/.git rev-parse --short HEAD)"
git push origin dist

echo "🌐 Uploading to Neocities..."
neocities push .

echo "✅ Deploy complete!"

# Return to main project folder
cd ../sadgrl.online
