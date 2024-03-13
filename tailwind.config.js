/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-image": "url(/saviour-banner.png)",
        "ido-event": "url(/ido-event-bg.png)",
        "tokenomics-bg": "url(/tokenomics-bg.png)",
        "roadmap-bg": "url(/road-map-bg.png)",
      },
      fontFamily: {
        shojumaru: "Shojumaru",
        zcool: "ZCOOL KuaiLe",
        "robo-mono": "Roboto Mono",
        inter: "Inter",
      },
      colors: {
        "samurai-red": "#ED0137",
        "smurai-grade-red": "#D51B46",
        "smurai-grade-orange": "#EE6910",
      },
    },
  },
  plugins: [],
}

