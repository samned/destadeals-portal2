module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: { darkBlue: "#00bbf9" },
    },
  },
  plugins: [require("flowbite/plugin")],
};
