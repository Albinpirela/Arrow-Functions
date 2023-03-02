const carrito = [
  {nombre: 'monitor de 32 pulgadas', precio: 500 },
  {nombre: 'televicion', precio: 150},
  {nombre: 'tablet', precio: 200},
  {nombre: 'Audifonos', precio: 50},
  {nombre: 'Teclado', precio: 10},
  {nombre: 'Celular', precio: 700},
]


// const nuevoArreglo = carrito.map(function(producto){
//   return `${producto.nombre} - precio${producto.precio}`;
// })
///////////////con Arrow function seria haci/////////////////////////////////////////////////
const nuevoArreglo = carrito.map( producto =>`${producto.nombre} - precio${producto.precio}`) 
//////////////////////aqui seria de la siguiente manera para hacerla Arrow function//////////
// const nuevoArreglo2 = carrito.forEach( function(producto) => {
//   return `${producto.nombre} - precio${producto.precio}`; 
// }
//haci pasamos de un arreglo a un Arrow function
const nuevoArreglo2 = carrito.forEach( (producto) =>`${producto.nombre} - precio${producto.precio}`)
//de esta manera pasamos de tres lineas de codigo a solo  una
console.log(nuevoArreglo);
console.log(nuevoArreglo2);
