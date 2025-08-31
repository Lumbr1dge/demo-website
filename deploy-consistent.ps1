# Deployment Script for Consistent Behavior (PowerShell)
# This script ensures your deployed site behaves exactly like your local version

Write-Host "🚀 Starting consistent deployment..." -ForegroundColor Green

# Set environment variables for consistent build
$env:NODE_ENV = "production"
$env:ASTRO_ENV = "production"
$env:BUILD_MODE = "production"

# Clean previous builds
Write-Host "🧹 Cleaning previous builds..." -ForegroundColor Yellow
if (Test-Path "dist") { Remove-Item -Recurse -Force "dist" }
if (Test-Path ".astro") { Remove-Item -Recurse -Force ".astro" }

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm ci --only=production

# Build with consistent settings
Write-Host "🔨 Building with consistent settings..." -ForegroundColor Yellow
npm run build

# Verify build output
Write-Host "✅ Verifying build output..." -ForegroundColor Green
if (-not (Test-Path "dist")) {
    Write-Host "❌ Build failed - dist directory not found" -ForegroundColor Red
    exit 1
}

# Check for critical files
Write-Host "🔍 Checking critical files..." -ForegroundColor Yellow
if (-not (Test-Path "dist/_astro/index.css")) {
    Write-Host "❌ Critical CSS file not found" -ForegroundColor Red
    exit 1
}

if (-not (Test-Path "dist/_worker.js/index.js")) {
    Write-Host "❌ Critical JS file not found" -ForegroundColor Red
    exit 1
}

# Deploy to Cloudflare
Write-Host "☁️ Deploying to Cloudflare..." -ForegroundColor Yellow
npx wrangler pages deploy dist --project-name=demo-site

# Verify deployment
Write-Host "✅ Deployment completed successfully!" -ForegroundColor Green
Write-Host "🌐 Your site should now behave consistently across all environments" -ForegroundColor Cyan
Write-Host "📱 Test on different screen sizes to verify responsive behavior" -ForegroundColor Cyan
Write-Host "🔍 Check that animations and layouts work the same as locally" -ForegroundColor Cyan

# Optional: Run consistency tests
Write-Host "🧪 Running consistency tests..." -ForegroundColor Magenta
Write-Host "1. Test mobile view (768px and below)" -ForegroundColor White
Write-Host "2. Test tablet view (768px - 1024px)" -ForegroundColor White
Write-Host "3. Test desktop view (1024px and above)" -ForegroundColor White
Write-Host "4. Verify all responsive breakpoints work correctly" -ForegroundColor White
Write-Host "5. Check that animations behave consistently" -ForegroundColor White
Write-Host "6. Verify touch interactions on mobile devices" -ForegroundColor White

Write-Host "🎉 Deployment script completed!" -ForegroundColor Green
