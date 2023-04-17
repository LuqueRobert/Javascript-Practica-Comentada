//* Crear un nuevo elemento o nodo

//*Creacion de un parrafo
var nuevo = document.createElement('p');

//*Creamos un nuevo texto
var text = 'Buenas Tardes esto es un nuevo elemento ty';
var textnew = document.createTextNode(text);

//*Agregar el texto nuevo en el parrafo
//?Al utilizar appendChild(): es para incluir un hijo dentro del padre
nuevo.appendChild(textnew);

//*Agregar un nuevo atributo de clase
nuevo.setAttribute('class','text');

//TODO:seleccionar contenedor
//*[0] es para seleccionar la posicion exacta del contenedor
//?Dato a pesar de solo estar en un elemento igual se guarda en un array
var contenedor =document.getElementsByClassName('contenedor')[0];

//*Agregar el nuevo parrafo dentro del contenedor

contenedor.appendChild(nuevo);