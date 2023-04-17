//*Scope
//*El scope es el alcance de una variable, que puede ser local global

//*Variable global - Se declara fuera de la funcion

var mensaje = 'Hola, soy una variable';

function mens(){
    alert(mensaje);
}



//*Variable local - Se declara dentro de una funcion

function desp(){
var despedida = 'Adios';
alert(despedida);

}

//*De esta manera se puede ejecutar la funcion sin necesidad de declarar
//?De esta manera se puede proteger las variables

(function(){
    alert('Buenas Tardes');
    alert('NIAAAA');
}())


