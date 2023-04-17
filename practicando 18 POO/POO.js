//*POO
//*Es una serie de normas de realizar las cosas
//*De manera que otras personas puedan utilizar
//*y adelantar su trabajo, de manera que consigamos
//*que el codigo se pueda reutilizar


//*Clases
//*Son funciones, llamadas funciones constructuras y se escriben iniciando con Mayusculas
//TODO: Estos son para explicar que ya tiene clases creadas no es tan necesario saberlo
//*CLASES DE JAVASCRIPT
var text = new String('Hola, soy un Texto');

var num = new Number(12);

var bol = new Boolean(true);

//*CLASES DE JAVASCRIPT COMPUESTAS
var arec = new Array('Robert', 'Ara','Lica','Liqui');

var obj = new Object({color:'red', tamaño:'grande'});


//*CLASES PERSONALIZADAS
//TODO: Estas son las clases reales para aplicarlos en distintos trabajos
//!Para que esto funcione y se vuelva un objeto el nombre de la funcion debe estar en mayuscula

function Persona(){
    this.nombre;
    this.edad;
}

//*Se crea objetos
var persona1 = new Persona();
persona1.nombre = 'Robert';
persona1.edad = 19;


//?Otra clase explicada
//!Esto sirve para simplificar el codigo
function Flor(nombre, color){
    this.nombre = nombre;
    this.color = color;
}

var pers1 = new Flor('tulipan','white');



//*Objetos
//*Es una coleccion de propiedades y metodos

var plant = {
    color: 'verde',
    tamanio: 'grande',
    //*METODOS son funciones dentro de objetos
    //?Tambien se puede utilizar parametros dentro de un objeto ojito
    escribeInformacion: function(precio){
        document.write('El color de la planta '+ plant.color + ', su tamaño es '+ plant.tamanio+ ' y su precio es '+ precio);
    }
}
//?Para llamar a esa funcion necesita escribir primero el objeto despues la funcion

plant.escribeInformacion(19);

//*CLASE PARA UNA PLANTA DISTINTA

function Planta(color, tamanio){
    this.color = color;
    this.tamanio = tamanio;
}

var plant1 = new Planta('azul', 'pequeño');

document.getElementsByClassName