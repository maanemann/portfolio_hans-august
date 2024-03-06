/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg": "hsl(110, 5%, 24%)",
      },
      borderWidth: {
        "3": "3px"
      }
    },
    // https://www.tints.dev/?brick=FAF5F0&ocker=F2DCA7&ockerdust=F1D7A6&aqua=F5FFF7
    "colors": {
      "white": "#fff",
      // ba:50 h:-4 s:0 lima:100 limi:-1 :
      "ocker": {
        50: "#F2DCA7",
        100: "#EFCE94",
        200: "#EAB571",
        300: "#E5994D",
        400: "#E0782A",
        500: "#C45A1D",
        600: "#A04118",
        700: "#782A12",
        800: "#54180C",
        900: "#310B07",
        950: "#1F0505"
      },
      // ba:50 h:-5 s:-3 lima:100 limi:6 :
      "ockerdust": {
        50: "#F1D7A6",
        100: "#EAC79A",
        200: "#E1AE7F",
        300: "#D49063",
        400: "#C6734D",
        500: "#AF5B41",
        600: "#8A483D",
        700: "#6C3B38",
        800: "#4C2F2F",
        900: "#322526",
        950: "#231F20"
      },
      // ba:50 h:-6 s:-1 lima:100 limi:12 :
      "brick": {
        50: "#FAF5F0",
        100: "#F4E9E1",
        200: "#E8CCC0",
        300: "#DCAEA3",
        400: "#CF8E87",
        500: "#C06868",
        600: "#B14E58",
        700: "#8E4352",
        800: "#713849",
        900: "#542C3C",
        950: "#412533"
      },
      // ba:50 h:7 s:-4 lima:100 limi:11 :
      "aqua": {
        50: "#F5FFF7",
        100: "#E2FEEB",
        200: "#B8FAD4",
        300: "#91F2C7",
        400: "#73E8C1",
        500: "#54D9BC",
        600: "#39C6B8",
        700: "#389799",
        800: "#376A72",
        900: "#2F454C",
        950: "#2D3539"
      },
    }
  },
  plugins: [],
  // purge: {
  //   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  //   options: {
  //     safelist: [/^border-r-/], // Ensure dynamic classes are not purged
  //   },
  // },
};
