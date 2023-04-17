var newparrafo = document.createElement('p');

var text = document.createTextNode('Buenas Noches soy un texto nuevo creado en el js de ubicar elements');

newparrafo.appendChild(text);

//*EL setAttribute no solo puede agregar clases si no tambien href o id o cualqueir cosa de atributo

newparrafo.setAttribute('class','text');

/*
*var contenedor = document.getElementsByClassName('contenedor')[0];
var contenedor = document.getElementsByTagName('div')[0];

contenedor.appendChild(parrafo);

*/
//*Seleccionar y agregar una clase a un padre que no tiene
var parrafoPrimero = document.getElementsByClassName('text')[0];

var padre = parrafoPrimero.parentNode;

//*Manera de agregar una clase al padre
padre.className = 'contenedor';

//*Esta metodo es para ingresar dos atributos (primer elemento, segundo elemento)
//*El primer elemento: va a servir para agregar informacion
//*El segundo elemento: va a servir para posicionar el primer elemento encima del segundo elemento

//TODO: padre.insertBefore(newparrafo, parrafoPrimero);

//!OTRO COSO a ver que pasa

var parrafos = document.getElementsByClassName('text');

padre.insertBefore(newparrafo,parrafos[1]);
