/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            "hero-fondo": "url('./assets/img/Hero.jpeg')",
         },
         colors: {
            "am-primary": "#F2B33D",
            "am-secondary": "#F2DC6D",
            "roj-primary": "#D9320D",
            "roj-secondary": "#F24B4B",
            "ve-primary": "#4CD948",
            "ve-secondary": "#ECD241",
            "ros-primary": "#F25CA2",
            "ros-secondary": "#EBC4F2",
         },
      },
   },
   plugins: [require("daisyui")],
};
