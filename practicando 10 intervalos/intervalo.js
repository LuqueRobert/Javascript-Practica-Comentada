//setInterval(funcion, tiempo en milisegundos);

var segundos = 0;
/*

setInterval(contar, 1000);

function contar(){
    ++segundos;
    document.write(segundos);
}
 */
/*OTRA FUNCION manera  */

setInterval(function(){
    ++segundos;
    document.write(segundos, ' - ')
},1000)