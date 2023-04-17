var boton = document.getElementById('boton');
//*click = un solo click
//*dblclick = doble click
boton.addEventListener('dblclick', function(){
    var parrafo = document.createElement('p');
    var textNuevo = document.createTextNode('Hola es un nuevo texto');

    parrafo.appendChild(textNuevo);

    parrafo.className = 'texto';

    var content = document.getElementsByClassName('contenedor')[0];
    content.appendChild(parrafo);
});