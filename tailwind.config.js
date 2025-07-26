/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      TealGreen: "#4E878C",
      TealGreen_1: "#6DA3A8",
      TealGreen_2: "#82B3B7",
      TealGreen_3: "#97C3C6",
      TealGreen_4: "#A3CDD2",
      Blue: "#3956dd",
      Black: "#000000",
      LightBlue: "#A1C9D9",
      DarkBlue: "#223A5E",
      White: "#FFF",
      Beige: "#E0C7A8",
      LightGray: "#c2c2c2",
      LightGray_1: "#d1d1d1",
      LightGray_2: "#ebebeb",
      DarkCharcoal: "#1A1A1A",
      Red: "#bd0303",
      Green: "#257402"
      
    },
    fontWeight: {
      Thin: "100",
      Regular: "400",
      Semibold: "600",
      Bold: "700",
    },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        MontserratAlternate: ["Montserrat Alternates", "sans-serif"],
        MontserratSubrayada: ["Montserrat Subrayada", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        ExtraBold: "800",
      },
      screens: {
        'mobile': '360px',
        'tablet': '768px',
        'laptop1': '1024px',
        'laptop2': '1366px',
        'desktop': '1440px',
      },
      boxShadow: {
        LightShadowGrey:
          "0 4px 6px -1px rgba(128, 128, 128, 0.5), 0 2px 4px -1px rgba(128, 128, 128, 0.25)",
          bottom: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Sombra solo en la parte inferior 
      },
    },
  },

  plugins: [],
};
