tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0097B2",
        "background-light": "#f5f8f8",
        "background-dark": "#0f2124",
        "content-dark": "#121212",
        "text-primary-dark": "#EAEAEA",
        "text-secondary-dark": "#888888",
        "border-dark": "#20454b",
        "brand-accent": "#0097B2",
        "brand-dark": "#0A0A0A",
        "brand-gray": "#1A1A1A",
        "brand-light-gray": "#D1D5DB",
      },
      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Roboto Condensed", "sans-serif"],
        project: ["Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
};
