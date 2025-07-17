#!/bin/bash

echo "🔧 Building Astro site..."
npm run build || exit 1

echo "🚚 Copying files to dist-deploy..."
rm -rf ../dist-deploy/*
cp -r dist/* ../dist-deploy/
cp -r dist/.* ../dist-deploy/ 2>/dev/null || true

cd ../dist-deploy

echo "📦 Committing and pushing to dist branch..."
git add .
git commit -m "Deploy from source commit $(git --git-dir=../sadgrl.online/.git rev-parse --short HEAD)"
git push origin dist

cd ../sadgrl.online
echo "✅ Deploy complete!"
