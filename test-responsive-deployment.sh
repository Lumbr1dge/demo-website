#!/bin/bash

# Test Responsive Deployment Script
# This script helps test that your deployed site works correctly in responsive mode

echo "🧪 Testing Responsive Deployment..."

# Check if deployed URL is provided
if [ -z "$1" ]; then
    echo "❌ Please provide your deployed URL"
    echo "Usage: ./test-responsive-deployment.sh https://your-site.pages.dev"
    exit 1
fi

DEPLOYED_URL=$1

echo "🌐 Testing deployed site: $DEPLOYED_URL"

# Test different viewport sizes
echo "📱 Testing Mobile View (375x667)..."
curl -s "$DEPLOYED_URL" | grep -q "background-color: #ffffff" && echo "✅ Mobile background OK" || echo "❌ Mobile background issue"

echo "📱 Testing Tablet View (768x1024)..."
curl -s "$DEPLOYED_URL" | grep -q "background-color: #ffffff" && echo "✅ Tablet background OK" || echo "❌ Tablet background issue"

echo "💻 Testing Desktop View (1920x1080)..."
curl -s "$DEPLOYED_URL" | grep -q "background-color: #ffffff" && echo "✅ Desktop background OK" || echo "❌ Desktop background issue"

echo ""
echo "🔍 Manual Testing Required:"
echo "1. Open $DEPLOYED_URL in your browser"
echo "2. Press F12 to open DevTools"
echo "3. Click the Device Toggle button (📱)"
echo "4. Test these viewport sizes:"
echo "   - Mobile: 375x667"
echo "   - Tablet: 768x1024"
echo "   - Desktop: 1920x1080"
echo "5. Check for white screen issues"
echo "6. Verify content loads immediately"
echo "7. Test scrolling and animations"

echo ""
echo "🎯 Expected Results:"
echo "✅ No white screen in any viewport"
echo "✅ Content visible immediately"
echo "✅ Responsive breakpoints work correctly"
echo "✅ Animations work smoothly"
echo "✅ No layout shifts"

echo ""
echo "🐛 If you see issues:"
echo "1. Check browser console for errors"
echo "2. Verify CSS is loading correctly"
echo "3. Check network tab for failed requests"
echo "4. Compare with local development behavior"

echo ""
echo "🎉 Responsive testing guide completed!"
