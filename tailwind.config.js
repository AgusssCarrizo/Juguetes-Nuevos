/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         backgroundImage: {
            fondo: "url('https://res.cloudinary.com/diotu9grj/image/upload/v1708027036/Pared_bv5ttk.jpg')",
         },
         colors: {
            "am-primary": "#F2B33D",
            "am-secondary": "#F2DC6D",
            "am-terciary": "#FFA500",
            khaki: "#F4A460",
            LightSkyBlue: "#87CEFA",
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
