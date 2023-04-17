
//Agregar Atributo de Funcion
texto.setAttribute('onkeyup','mostrar()');

//Creacion de nuevo articulo
var newparrafo = document.createElement('p');

var text = document.createTextNode(textoPerso);

var textPersoo = document.getElementById('texto');

var textoPerso = texto.value; //Buscar texto

//Creando Funcion
function mostrar(){



newparrafo.appendChild(text);


newparrafo.setAttribute('Class', 'personalizado');

}
//Buscar elemento
var parrafos = document.getElementById('text');

var padreParrafos = parrafos.parentNode;

//!REEMPLAZANDO ELEMENTO
padreParrafos.replaceChild(newparrafo, parrafos);

