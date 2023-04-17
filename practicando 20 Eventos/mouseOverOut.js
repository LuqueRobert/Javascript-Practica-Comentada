var parrafo = document.getElementsByClassName('texto')[0];

//*Creando Evento mouseOver
//?Esto es para cuando el mouse estea arriba


parrafo.addEventListener('mouseover',function(e){
var newparrafo = document.createElement('p');
var texto = 'Buenas noches a todos estos es un nuevo parrafo jijija utilizando el evento mouseover';
var textNuevo = document.createTextNode(texto);
newparrafo.appendChild(textNuevo);
newparrafo.setAttribute('class', 'texto');
newparrafo.id = 'parrafoAgregado'; //!Agregado de id
//*buscar contenedor
var contenedor = document.getElementsByClassName('contenedor')[0];
contenedor.appendChild(newparrafo);

});




//*Creando evento mouseout
//?Esto es cuando sale del elemento seleccionado

parrafo.addEventListener('mouseout',function(){
    var parrafoAgregado = document.getElementById('parrafoAgregado');
    var contenedor = document.getElementsByClassName('contenedor')[0];

    contenedor.removeChild(parrafoAgregado);
});