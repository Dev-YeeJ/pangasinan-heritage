/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tertiary-fixed-dim": "#e9c349",
        "primary-fixed-dim": "#a3c9ff",
        "tertiary": "#735c00",
        "surface-tint": "#27609d",
        "surface-container-lowest": "#ffffff",
        "surface-dim": "#d9dadb",
        "on-tertiary-container": "#4f3e00",
        "error-container": "#ffdad6",
        "on-tertiary-fixed-variant": "#574500",
        "secondary": "#7e562e",
        "primary": "#003461",
        "outline": "#727781",
        "surface-container": "#edeeef",
        "on-primary": "#ffffff",
        "on-surface": "#191c1d",
        "surface": "#f8f9fa",
        "secondary-fixed-dim": "#f1bc8c",
        "on-secondary-fixed": "#2d1600",
        "outline-variant": "#c2c6d1",
        "inverse-on-surface": "#f0f1f2",
        "primary-fixed": "#d3e4ff",
        "inverse-surface": "#2e3132",
        "on-primary-fixed-variant": "#004882",
        "on-error-container": "#93000a",
        "surface-variant": "#e1e3e4",
        "background": "#f8f9fa",
        "error": "#ba1a1a",
        "on-tertiary-fixed": "#241a00",
        "surface-container-high": "#e7e8e9",
        "tertiary-fixed": "#ffe088",
        "surface-container-highest": "#e1e3e4",
        "primary-container": "#004b87",
        "on-secondary-fixed-variant": "#633f19",
        "on-secondary": "#ffffff",
        "on-surface-variant": "#424750",
        "inverse-primary": "#a3c9ff",
        "on-primary-container": "#8abcff",
        "on-error": "#ffffff",
        "tertiary-container": "#cca830",
        "on-secondary-container": "#79512a",
        "secondary-container": "#fdc796",
        "surface-bright": "#f8f9fa",
        "on-tertiary": "#ffffff",
        "surface-container-low": "#f3f4f5",
        "secondary-fixed": "#ffdcbf",
        "on-background": "#191c1d",
        "on-primary-fixed": "#001c38"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      spacing: {
        "container-margin-mobile": "20px",
        "section-gap": "64px",
        "gutter": "24px",
        "container-margin-desktop": "80px",
        "base": "8px"
      },
      fontFamily: {
        "headline-md": ["Plus Jakarta Sans"],
        "headline-lg": ["Plus Jakarta Sans"],
        "label-sm": ["Inter"],
        "body-lg": ["Inter"],
        "body-md": ["Inter"],
        "headline-display": ["Plus Jakarta Sans"],
        "headline-lg-mobile": ["Plus Jakarta Sans"]
      },
      fontSize: {
        "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "700" }],
        "headline-lg": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
        "label-sm": ["14px", { "lineHeight": "1", "letterSpacing": "0.05em", "fontWeight": "600" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "headline-display": ["48px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "headline-lg-mobile": ["28px", { "lineHeight": "1.2", "fontWeight": "700" }]
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards"
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
};
