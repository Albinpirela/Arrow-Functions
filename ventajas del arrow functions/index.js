//Veamos como pasarle parametros al arrow function
let aprendiendo = function(tegnologia, tegnologia2){//se le agregan los parametros de la funcion tegnplogia y tegnologia 2
  console.log(`Aprendiendo ${tegnologia} y ${tegnologia2}`);//se le cambian las comillas de string a las de template string
}
aprendiendo('Java scrript', 'Nodejs')//se le colocan los parametros a la llamada de la funcion y les ponemos el nombre de las tegnologias

let aprendiendo2 = (tegnologia, tegnologia2) => `Aprendiendo ${tegnologia} y ${tegnologia2}`;//cuando le pasas solamente un parametro a tu arrow functin los parametros son obcionales
//pero si tienes mas parametros se tienen que agregar los parentecis
console.log(aprendiendo2('Java scrript', 'Nodejs'));
