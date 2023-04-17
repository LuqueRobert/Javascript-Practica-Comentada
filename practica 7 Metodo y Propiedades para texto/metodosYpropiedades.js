//*Dato interesante :v se puede meter dentro de un objeto funciones interesting

var Persona = {
    nombre: 'Robert',
    edad: 19,
    vive: 'Callao',
    crecer: function(){
        var nomber = 1 + 1;
    }
};

/*
!Intesante funcion esto quiere decir que si un objeto es
?console.log();
?console es un objeto y
*.Log es una funcion que esta dentro del objeto
TODO:Sin duda alguna muy interesante
*/
var text = 'Buenas Tardes Muchachos';


//* METODOS Y PROPIEDADES PARA CADENAS DE TEXTO :V
//* Length - Cuenta el numero de caracteres
var numerosCaracteres = text.length;

//* toUpperCase() - Transformar todos los caracteres a Mayusculas

var mayusculas = text.toUpperCase();

//* tolowerCase() - Transforma todos los caracteres a Minusculas

var minusculas = text.toLowerCase();

//* substring() - Extraer desde un punto hasta otro los caracteres

var extraer = text.substring(0,6);

//* replace(valor1, valor2) - Reemplaza una cadena de caracteres por otra
//!solo primera se pone la variable y despues el Metodo y se especifica el primer valor que debe ser que este dentro del string y el otro valor que lo quiera reemplazar :D

var reemplazo = text.replace('Tardes', 'Noches');


//* indexOf('a') - Buscar el primer caracter que coincida e indica la posicion
//?Te da como resultado el numero de posicion de donde se encuentra el objeto

var buscarA = text.indexOf('a');


//* lastIndexOf('a') - Buscara el ultimo caracter que coincida e indicara la posicion

var buscarAu = text.lastIndexOf('a');

//*split('') - Se convierte la cadena de texto en un arecglo dividiendo los elementos segun el separador indicado
//!('Aca se introducie el metodo de separacion de elementos para dividirlos y agregar cada elemento en un array')

var arecgloText = text.split(' ');

document.write(buscarA);
document.write(arecgloText);


