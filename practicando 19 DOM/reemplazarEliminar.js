var newparrafo = document.createElement('p');

var text = document.createTextNode('Buenas Tardes');

newparrafo.appendChild(text);

newparrafo.setAttribute('Class', 'text');

//-----------------------------------

var parrafos = document.getElementsByClassName('text');

//*ParentNode para acceder al padre de los parrafos
var padreParrafos = parrafos[0].parentNode;

//!REEMPLAZANDO ELEMENTO
padreParrafos.replaceChild(newparrafo, parrafos[1]);


//!ELIMINAR ELEMENTO SUAVE

padreParrafos.removeChild(parrafos[2]);

