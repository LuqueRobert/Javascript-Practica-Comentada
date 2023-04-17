function elegirColor(){
    var estadoActivador = document.getElementById('colorFavorito').checked;

    if(estadoActivador == true){
        document.getElementById('azul').disabled = false;
        document.getElementById('verde').disabled = false;
        document.getElementById('otro').disabled = false;
    }else{
        document.getElementById('azul').disabled = true;
        document.getElementById('verde').disabled = true;
        document.getElementById('otro').disabled = true;
    }
}
//*Evento change funciona para los radio butons para que realicen una cierta funcion

var inputcolorFavorito = document.getElementById('colorFavorito');

inputcolorFavorito.addEventListener('change', elegirColor);



