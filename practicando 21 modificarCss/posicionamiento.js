var contenedorParrafos = document.getElementsByClassName('flexbox')[0];

var bIquierda = document.getElementById('izquierda');
var bCentro = document.getElementById('centro');
var bDerecha = document.getElementById('derecha');

bIquierda.addEventListener('click',function(){
    contenedorParrafos.style.justifyContent = 'flex-start';
});


bCentro.addEventListener('click',function(){
    contenedorParrafos.style.justifyContent = 'center';
});


bDerecha.addEventListener('click',function(){
    contenedorParrafos.style.justifyContent = 'flex-end';
});