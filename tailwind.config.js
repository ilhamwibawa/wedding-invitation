module.exports = {
  content: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    fontFamily: {
      heading: ["Dancing Script", "serif"],
      body: ["Josefin Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")],
};
