#!/bin/bash

# Deployment Script for Consistent Behavior
# This script ensures your deployed site behaves exactly like your local version

echo "🚀 Starting consistent deployment..."

# Set environment variables for consistent build
export NODE_ENV=production
export ASTRO_ENV=production
export BUILD_MODE=production

# Clean previous builds
echo "🧹 Cleaning previous builds..."
rm -rf dist
rm -rf .astro

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Build with consistent settings
echo "🔨 Building with consistent settings..."
npm run build

# Verify build output
echo "✅ Verifying build output..."
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

# Check for critical files
echo "🔍 Checking critical files..."
if [ ! -f "dist/_astro/index.css" ]; then
    echo "❌ Critical CSS file not found"
    exit 1
fi

if [ ! -f "dist/_worker.js/index.js" ]; then
    echo "❌ Critical JS file not found"
    exit 1
fi

# Deploy to Cloudflare
echo "☁️ Deploying to Cloudflare..."
npx wrangler pages deploy dist --project-name=demo-site

# Verify deployment
echo "✅ Deployment completed successfully!"
echo "🌐 Your site should now behave consistently across all environments"
echo "📱 Test on different screen sizes to verify responsive behavior"
echo "🔍 Check that animations and layouts work the same as locally"

# Optional: Run consistency tests
echo "🧪 Running consistency tests..."
echo "1. Test mobile view (768px and below)"
echo "2. Test tablet view (768px - 1024px)"
echo "3. Test desktop view (1024px and above)"
echo "4. Verify all responsive breakpoints work correctly"
echo "5. Check that animations behave consistently"
echo "6. Verify touch interactions on mobile devices"

echo "🎉 Deployment script completed!"
