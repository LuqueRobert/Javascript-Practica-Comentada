//*SELECTORES INDIVIDUALES
//*getElementById(): Selecciona el elemento por su atributo ID
//*querySelector(): Selecciona el elemento con un selector CSS, devolviendolo el primer elemento que coincida.

//*SELECTORES MULTIPLES
//*getElementByClassName(): Selecciona todos los elementos que tengan la clase especifica
//*getElementByTagName(): Selecciona todos los elementos con la etiqueta especificada
//*querySelectorAll():Selecciona todos los elementos con el selecctor CSS especificado

//-----------------------------

//!Recuerdo que todo lo que vamos a utilizar son metodos
//!seleccionar por id

var text2 = document.getElementById('segundo');
var boton = document.getElementById('boton');

//!Seleccionar por el primer elemento que coincida

var text2 = document.querySelector('#segundo');

//*Selecctores multiples
//!Selectores multiples de clases
//?En este caso esto lo que hace es guardar todo las clases en un array
var parrafos = document.getElementsByClassName('text');

//!Selectores multiples de etiquetas

var parraafos = document.getElementsByTagName('p');

//!Selectores igual con el css pero es todos los elementos que coincidan

var elements = document.querySelectorAll('.text');


