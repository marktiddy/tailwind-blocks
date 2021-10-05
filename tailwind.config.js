module.exports = {
  purge: {
    enabled: true,
    content: [
      "./resources/**/*.js",
      "./resources/js/blocks/*.js",
      "./resources/**/*.jsx",
      "./resources/css/*.css",
    ],
  },
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "0rem",
      },
    },
    extend: {
      colors: {
        primary: "#0EA5E9",
        secondary: "#14B8A6",
        light: "#F9FAFB",
        dark: "#1F2937",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  important: true,
  variants: {},
  plugins: [require("postcss-import")],
};
