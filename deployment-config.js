// Deployment Configuration for Consistent Behavior
// This file ensures your deployed site behaves exactly like your local version

export const deploymentConfig = {
  // Force consistent viewport behavior
  viewport: {
    width: "device-width",
    initialScale: 1.0,
    maximumScale: 1.0,
    userScalable: false,
    viewportFit: "cover",
  },

  // Ensure consistent CSS processing
  css: {
    preserveWhitespace: true,
    minify: false, // Disable CSS minification for consistency
    autoprefixer: true,
    postcss: true,
  },

  // Ensure consistent JavaScript behavior
  javascript: {
    minify: false, // Disable JS minification for consistency
    sourcemap: true,
    preserveComments: true,
  },

  // Force consistent responsive breakpoints
  breakpoints: {
    xs: "475px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },

  // Ensure consistent asset handling
  assets: {
    inlineThreshold: 0, // Don't inline any assets
    cacheControl: "public, max-age=31536000, immutable",
  },

  // Force consistent rendering
  rendering: {
    forceConsistentLayout: true,
    preventLayoutShift: true,
    consistentSpacing: true,
  },
};

// Environment-specific overrides
export const getEnvironmentConfig = (env = "production") => {
  const baseConfig = { ...deploymentConfig };

  if (env === "development") {
    // Development-specific settings
    baseConfig.css.minify = false;
    baseConfig.javascript.minify = false;
    baseConfig.assets.inlineThreshold = 0;
  }

  if (env === "production") {
    // Production-specific settings for consistency
    baseConfig.css.minify = false; // Keep false for consistency
    baseConfig.javascript.minify = false; // Keep false for consistency
    baseConfig.assets.inlineThreshold = 0;
  }

  return baseConfig;
};

export default deploymentConfig;
