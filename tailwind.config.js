export default {
  content: ["./src/**/*.tsx", "./index.html"],
  theme: {
    extend: {
      colors: {
        "red-primary": "#EF5350",
        "red-secondary": "#C62828",
        "yellow-main": "#FECA1B",
        "blue-main": "#3761A8",
        cream: "#EFF1F0",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        pokemon: ["pokemon", "sans-serif"],
        pressStart: ["pressStart", "system-ui"],
      },
      fontSize: {
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        18: "1.125rem",
        24: "1.5rem",
        32: "2rem",
      },
    },
  },
  plugins: [],
};
