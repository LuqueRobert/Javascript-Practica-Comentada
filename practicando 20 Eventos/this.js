//*La palabra this. es la palabra reservada para especificar a cual fue el objeto fue seleccionado
//*Esto funciona que cambia dependiendo de la situacion
//*Viendo cual fue el objeto que se modifico o aplico el evento
//*cambia dependiendo de donde fue utilizada

var parrafo = document.getElementsByClassName('texto');

for(var i = 0; i< parrafo.length;i++){

    parrafo[i].addEventListener('click', function(){
        this.className = 'texto fondo-rojo';
    });

}

//*Al usar this en un objeto el this se convierte automaticamente en el objeto
var planta={
    color: 'verde',
    tamanio: 'grande',
    infomacion: function(){
        document.write('El color de la planta es ' + this.color); //*es igual a planta.color
    }
}
//*Se puede hacer de manera mas denimaca en ves de
//*planta.color poner this.color

//* https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/this




