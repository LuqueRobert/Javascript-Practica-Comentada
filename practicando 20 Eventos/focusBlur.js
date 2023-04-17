//*Evento focus Sirve para cuando en un formulario estas llenando
//*realice una funcion cuando esta enfocado en el recuadro

var campoNombre = document.getElementById('nombre');

campoNombre.addEventListener('focus',function(){
    campoNombre.setAttribute('value', 'Texto tengo el foco');
});

//*Evento blur es cuando presionas fuera del reucadro una vez enfocado
campoNombre.addEventListener('blur',function(){
    campoNombre.setAttribute('value','Ya no tengo el foco Pi Pi Pi');
});
