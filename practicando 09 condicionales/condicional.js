var num = 10;


if(num >= 1 && num<=4){
    document.write('SIUUU');
    //console.log();
    //alert();
}else if(num>=5 && num<=7){
    document.write('Ostias');
}else if(num>=10){
    document.write('demasiado grande xD');
}else{
    document.write('parece que hay un numero negativo');
}

//switcho
var color = black;

switch(color){
    case black: document.write('Ta bueno el color negro');
    break;
    case red: document.write('Es rojo');
    break;
    case blue: document.write('Es azul');
    break
    default: document.write('Este color no esta dentro de color');
    break
}