// Mensajes por consola
console.log('mensaje enviado por consola');
console.warn('mensaje de alerta por consola');
console.error('Error por consola');

// Mensajes por el navegador
document.write('<h1>Muestra lo que se desea por el navegador como titulo </h1>');
document.write('<h2>Muestra lo que se desea por el navegador</h2>');

// Mensajes emergentes
alert('mensaje emergente informativo');
prompt('Mensaje emergente para solicitar datos');
confirm('Mensaje emergente para solicitar confirmación');


// Variables
// Espacio en memoria RAM para almacenar datos
// Es una caja qu me permite guardar un único dato

// Declarar variable: Reservar un espacio en memoria para guardar datos
// estandar lowerCamelCase

var cadenaDeTexto = 'Hola Mundo';
console.log(cadenaDeTexto);
// tipos de datos: string, number, null, boolean, undefined
// bajamente tipado: Que dentro de una misma variable puedo guardar más de un 
// tipo de dato en distintos momentos
var dato;
console.log('tipo de dato de la variable "dato": ' + typeof dato );
dato = 'Ahora es una cadena';
console.log('tipo de dato de la variable "dato": ' + typeof dato );
dato = true;
console.log('tipo de dato de la variable "dato": ' + typeof dato );
dato = null;
console.log('tipo de dato de la variable "dato": ' + typeof dato );

// trato de datos seggún su tipo 
console.log(10+10);
console.log('10'+'10');

// precauciones que debo tener con el bajo tipado
var numeroUnoString = prompt('Ingresa primer número');
var numeroDosString = prompt('Ingresa segundo número');

var numeroUno = parseInt(numeroUnoString);
var numeroDos = parseInt(numeroDosString);

console.log('La suma de los números es: ' + (numeroUno + numeroDos));
