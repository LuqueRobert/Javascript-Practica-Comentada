var boton = document.getElementById('boton');
var boton2 = document.getElementById('boton2');

function activar(){
    alert('Buenas Tardes');
}

//*Es un escuchador el primero parametro es que tipo de evento va a escuchar
//*El segundo parametro es la funciona que va a realizar
boton.addEventListener('click',activar);


function removerAlerta(){
    boton.removeEventListener('click',activar);
}

//*Es para eliminar un listener o escuchador
boton2.addEventListener('click', removerAlerta);

/*Distintos tipos de eventos


https://developer.mozilla.org/es/docs/Web/Events


*/
