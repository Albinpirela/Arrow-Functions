// const reproductor = {
//   reproducir: function(id){
//     console.log(`Reproduciendo cancion con el id ${id}`);
//   },
//   pausar: function(){
//      console.log('Pausando...');
//   },
//   borrar: function(id){
//      console.log(`Borrando cancion...${id }`);
//   },
//   crearPlayList: function(nombre){
//     console.log(`Creando playlist de ${nombre}`);
//   },
//   reproducirPlayList: function(nombre){
// console.log(`Reproduciendo la playlist ${nombre}`);
//   },
// }
// reproductor.reproducir(30);
// reproductor.reproducir(20);
// reproductor.pausar();
// reproductor.borrar(30);
// reproductor.crearPlayList('Heavi Metal');
// reproductor.reproducir("Rock de los 90");

// las ventajas de el arrow function con los metodos de propiedad
const reproductor = {
  cancion: '',
  reproducir: id =>console.log(`Reproduciendo cancion con el id ${id}`),
  pausar: () => console.log('Pausando...'),
  borrar: id => console.log(`Borrando cancion...${id }`),
  crearPlayList: nombre => console.log(`Creando playlist de ${nombre}`),
  reproducirPlayList: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

       //set y get son terminos universales
  set nuevaCancion(cancion) {
  this.cancion = cancion;//esta parte del objeto va a rescribir  cacion: '', en la linea 25 this es para q lo busque dentro del objeto y no se baya asia afuera
    console.log(`Añadiendo ${cancion}`)// en el console.log le ponemos a7adiendo y despues la cancion
  }, // set es una forma de agregar valores
  get obtenerCancion(){
     console.log(`${this.cancion}`)//this para obtener en este mismo objeto
  }// get es una forma de obtener de buelta esos valores
}
// de esta manera simplificamos el codigo
reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlayList('Heavi Metal');
reproductor.reproducir("Rock de los 90");

