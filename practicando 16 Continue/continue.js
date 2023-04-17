//Continue - Permite saltar a la siguiente ejecucion del ciclo
var semana = [lunes, martes, miercoles, jueves, viernes, sabado, domingo];

for(var i = 0; i<= semana.length; i++){
    //?Esto funcion de manera en que el codigo de abajo de continue nose va a ejecutar y va a pasar con el siguiente Dato interesante pero si encaso esta antes de todas maneras se va a ejecutar
    document.write(semana[i]);
    if(semana[i] == 'jueves')
    continue;
}