/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  // Safelist critical responsive classes to prevent purging
  safelist: [
    // Responsive utilities
    "sm:block",
    "sm:hidden",
    "sm:flex",
    "sm:grid",
    "md:block",
    "md:hidden",
    "md:flex",
    "md:grid",
    "lg:block",
    "lg:hidden",
    "lg:flex",
    "lg:grid",
    "xl:block",
    "xl:hidden",
    "xl:flex",
    "xl:grid",
    "2xl:block",
    "2xl:hidden",
    "2xl:flex",
    "2xl:grid",
    // Responsive spacing
    "sm:p-4",
    "md:p-6",
    "lg:p-8",
    "xl:p-10",
    "sm:m-4",
    "md:m-6",
    "lg:m-8",
    "xl:m-10",
    // Responsive text sizes
    "sm:text-sm",
    "md:text-base",
    "lg:text-lg",
    "xl:text-xl",
    // Responsive flexbox
    "sm:flex-col",
    "md:flex-row",
    "lg:flex-col",
    "xl:flex-row",
    // Responsive grid
    "sm:grid-cols-1",
    "md:grid-cols-2",
    "lg:grid-cols-3",
    "xl:grid-cols-4",
    // Responsive visibility
    "sm:visible",
    "md:visible",
    "lg:visible",
    "xl:visible",
    "sm:invisible",
    "md:invisible",
    "lg:invisible",
    "xl:invisible",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#B22222",
          dark: "#330000",
        },
      },
      boxShadow: {
        "3xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      },
      // Ensure consistent breakpoints
      screens: {
        xs: "475px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
  // Ensure all variants are generated
  variants: {
    extend: {
      display: ["responsive"],
      visibility: ["responsive"],
      opacity: ["responsive"],
      transform: ["responsive"],
      transition: ["responsive"],
    },
  },
};
