export const Products = [
   {
      id: 1,
      img: "https://res.cloudinary.com/diotu9grj/image/upload/v1704405083/Andador-Forest-Animals-236x300_fgbdyb.jpg",
      title: "Andadador Forest Animal",
      price: 3000,
      category: "Arrastre",
   },
   {
      id: 2,
      img: "https://res.cloudinary.com/diotu9grj/image/upload/v1704405130/Autito_c5ktz6.jpg",
      title: "Andador con forma de auto",
      price: 8700,
      category: "Arrastre",
   },
   {
      id: 3,
      img: "https://res.cloudinary.com/diotu9grj/image/upload/v1704405173/Camion-con-remolque_oi0fo2.png",
      title: "Camion con remolque",
      price: 3000,
      category: "Arrastre",
   },
   {
      id: 4,
      img: "https://res.cloudinary.com/diotu9grj/image/upload/v1704405181/Carrito-ensarte-003_lxesth.jpg",
      title: "Carrito con aros",
      price: 3700,
      category: "Arrastre",
   },
   {
      id: 5,
      img: "https://res.cloudinary.com/diotu9grj/image/upload/v1704405417/Ajedrez_uidr62.webp",
      title: "Ajedrez",
      price: 5000,
      category: "mesa",
   },
   {
      id: 6,
      img: "https://res.cloudinary.com/diotu9grj/image/upload/v1704405427/Digalo-con-meme_hm1fex.webp",
      title: "Digalo con memes",
      price: 4500,
      category: "mesa",
   },
   {
      id: 7,
      img: "https://res.cloudinary.com/diotu9grj/image/upload/v1704405436/El-erudito_zradye.webp",
      title: "El erudito",
      price: 3100,
      category: "mesa",
   },
   {
      id: 8,
      img: "https://res.cloudinary.com/diotu9grj/image/upload/v1704405445/Life_wxccfs.webp",
      title: "Life",
      price: 4500,
      category: "mesa",
   },
   {
      id: 9,
      img: "https://res.cloudinary.com/diotu9grj/image/upload/v1704405453/Uno_xm9zuk.webp",
      title: "Uno",
      price: 2500,
      category: "mesa",
   },
   {
      id: 10,
      img: "https://res.cloudinary.com/diotu9grj/image/upload/v1704405950/Laberinto-DIdactico_sfe6lf.jpg",
      title: "Prono laberinto didactico con abajo contador en madera",
      price: 3000,
      category: "Didacticos",
   },
   {
      id: 11,
      img: "https://res.cloudinary.com/diotu9grj/image/upload/v1704405957/Memoria_cwhywe.webp",
      title: "Juego de luces y sonido para la memoria",
      price: 3000,
      category: "Didacticos",
   },
   {
      id: 12,
      img: "https://res.cloudinary.com/diotu9grj/image/upload/v1704405966/Rompecabezas-el-circo_hgx40b.jpg",
      title: "Rompecabezas el circo 60 piezas",
      price: 3400,
      category: "Didacticos",
   },
   {
      id: 13,
      img: "https://res.cloudinary.com/diotu9grj/image/upload/v1704405973/Sistema-solar_f1tumo.jpg",
      title: "Encastre sistema solar espacio planetas de madera.",
      price: 2500,
      category: "Didacticos",
   },
];

export const TotalProducts = Products.length;

export const products = Products.reduce((acc, product) => {
   if (!acc[product.category]) {
      acc[product.category] = [];
   }
   acc[product.category] = [...acc[product.category], product];
   return acc;
}, {});
