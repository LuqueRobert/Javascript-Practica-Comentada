/*
//*for (variable inicio; longitud o condicion; incremento){
    Codigo que queremos repetir;
*}
*/

for(var i = 1;i <= 10; ++i){
    document.write(i);
    document.write("<br>");
}

var semana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
for(var i = 0; i < semana.length; ++i){
    document.write(semana[i], ' ');
}

//*FOR IN
document.write('<br>');

for(dia in semana){
    document.write(semana[dia], ' ');
}