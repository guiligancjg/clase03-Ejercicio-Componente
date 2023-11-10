import  Productos from "./componnents/Productos"



const listaProductos = [
  {
     "id": 1,
     "nombre": "Zapatillas Deportivos Nike Air Max",
     "descripción": "Zapatos deportivos de alta calidad con tecnología Air Max para una mayor comodidad y rendimiento.",
     "precio": 5999.99,
     "SKU": "NIK-AMX-BLK-9",
     "cantidad_disponible": 25,
     "url": "https://nikearprod.vtexassets.com/arquivos/ids/702815/DR2395_100_A_PREM.jpg"
   },
   {
     "id": 2,
     "nombre": "Smartphone Samsung Galaxy S21",
     "descripción": "El último modelo de smartphone de Samsung con pantalla OLED de alta resolución y cámara de alta calidad.",
     "precio": 44999.00,
     "SKU": "SAM-S21-GLD-128",
     "cantidad_disponible": 15,
     "url": "data:image/jpeg;base64,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"
   },
   {
     "id": 3,
     "nombre": "Laptop HP Pavilion",
     "descripción": "Laptop ligera y potente con procesador Intel Core i5 y pantalla Full HD de 14 pulgadas.",
     "precio": 32999.50,
     "SKU": "HP-PV-14-i5-8GB",
     "cantidad_disponible": 10,
     "url": "https://pardohogar.vtexassets.com/arquivos/ids/189605/Notebook-HP-Pavilion-15.6---FHD-Ryzen-7-8GB-SSD-512GB-15-EH1504LA-3.jpg?v=638210688711700000"
   },
   {
     "id": 4,
     "nombre": "Camiseta de Fútbol Adidas Argentina",
     "descripción": "Camiseta oficial de la selección argentina de fútbol, edición local.",
     "precio": 2499.75,
     "SKU": "ARG-HM-21-XXL",
     "cantidad_disponible": 30,
     "url": "https://media.ambito.com/p/b37d5b9e0dd7eb053c0d35db627c6c1b/adjuntos/239/imagenes/040/377/0040377484/camiseta-argentina-adidas-3-estrellasjpg.jpg"
   },
   {
     "id": 5,
     "nombre": "Auriculares Inalámbricos Sony WH-1000XM4",
     "descripción": "Auriculares con cancelación de ruido, sonido de alta calidad y larga duración de la batería.",
     "precio": 8999.00,
     "SKU": "SONY-WH-1000XM4",
     "cantidad_disponible": 20,
     "url": "https://http2.mlstatic.com/D_NQ_NP_990137-MLA51077928932_082022-O.webp"
   },
   {
     "id": 6,
     "nombre": "Televisor LG OLED 4K 55 Pulgadas",
     "descripción": "Televisor OLED con resolución 4K y Smart TV integrado para una experiencia de visualización impresionante.",
     "precio": 59999.99,
     "SKU": "LG-OLED-55-4K",
     "cantidad_disponible": 5,
     "url": "https://www.lg.com/ar/images/televisores/md07538093/gallery/A1-3-1100x730.jpg"
   },
   {
     "id": 7,
     "nombre": "Mouse Logitech MX Master 3",
     "descripción": "Mouse inalámbrico de alta precisión con múltiples botones programables y un diseño ergonómico.",
     "precio": 2499.25,
     "SKU": "LOG-MX3-BLK",
     "cantidad_disponible": 12,
     "url": "https://images.start.com.ar/910-006562-3.jpg"
   },
   {
     "id": 8,
     "nombre": "Libro: 'El Gran Gatsby' de F. Scott Fitzgerald",
     "descripción": "Novela clásica ambientada en la década de 1920 que explora la vida de Jay Gatsby y la sociedad de la época.",
     "precio": 799.99,
     "SKU": "LIB-GATSBY-ESP",
     "cantidad_disponible": 18,
     "url": "https://images.cdn3.buscalibre.com/fit-in/360x360/db/4f/db4f7c8407da4f233726273715c21685.jpg"
   },
   {
     "id": 9,
     "nombre": "Cámara Canon EOS Rebel T7i",
     "descripción": "Cámara DSLR con sensor de alta resolución y capacidades de grabación de video Full HD.",
     "precio": 18999.75,
     "SKU": "CAN-REBEL-T7i-KIT",
     "cantidad_disponible": 8,
     "url": "https://www.digi-zoom.com.ar/images/productos/1441_1_m.jpg"
   },
   {
     "id": 10,
     "nombre": "Bicicleta de Montaña Specialized Rockhopper",
     "descripción": "Bicicleta todoterreno con cuadro de aluminio y suspensión delantera para aventuras en la montaña.",
     "precio": 29999.50,
     "SKU": "SPC-RKH-MTN-29",
     "cantidad_disponible": 7,
     "url": "https://acdn.mitiendanube.com/stores/002/692/526/products/rockhopper_sport_satinslate_02-1024x1024-75ea949d9f682968db16933433261633-1024-1024.jpg"
   }
];


const lista = listaProductos.map((list) =>(
<Productos 
nombre= {list.nombre}
descripcion= {list.descripción}
precio= {list.precio}
sku= {list.SKU}
cantidad_disponible = {list.cantidad_disponible}
url = {list.url}
/>

));

function App() {

  return (
    <>
      {lista}
    </>
  )
}

export default App
