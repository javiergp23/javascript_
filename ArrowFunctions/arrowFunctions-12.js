// Arrow Functions con .map y .forEach

const carrito = [
  {
    nombre: "Celular",
    precio: 345,
  },
  {
    nombre: "Televisor",
    precio: 650,
  },
  {
    nombre: "Computadora",
    precio: 500,
  },
];

const nuevoArreglo = carrito.map( (producto) =>{
    return `${producto.nombre} - Precio: ${producto.precio}`;
})

const Arreglo2 = carrito.forEach( function(producto){
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})

console.log(nuevoArreglo);
