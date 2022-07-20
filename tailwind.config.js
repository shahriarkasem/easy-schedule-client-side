/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "my-blue": "#6099d0",
      "my-blue-hover": "#6285a7",
      "my-orange": "#FF5722",
      "my-orange-hover": "#e97a57",
      "my-green": "#13d58b",
      "my-green-hover": "#65eeba",
      "my-default": "#ffff",
    },
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#a991f7",
          secondary: "#f6d860",
          accent: "#37cdbe",
          neutral: "#3d4451",
          bgMeet: "#efefef",
          "base-100": "#ffffff",
        },
      },
      // "dark",
      // "cupcake",
    ],
  },
  plugins: [require("daisyui")],
};
