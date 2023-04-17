//TODO:SIUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU

//? METODOS Y PROPIEDADES PARA ARECGLOS

var familia = ['Robert','Maria','Pedro'];
var familia2 = ['Tomas','Jose'];

//*length --Devuelve la cantidad de elementos del arreglo

var cantidadArray = familia.length;

document.write(cantidadArray);
document.write('<br>');


//*concat --Permite unir arecglos
//?
var newFamily = familia.concat(familia2);

document.write(newFamily);
document.write('<br>');

//*join --Contrario a split - Muestra todos los elementos del arecglo en una cadena de texto
//?Lo que esta adentro de (' ') es el separador para los elementos
var texto = familia.join(' ');

document.write(texto);
document.write('<br>');

//*pop -- Eliminar el ultimo elemento del arecglo
//?Este elemento es eliminado de la variable familia y lo guarda en la variable nueva
//!Tambien se puede utilizar sin que se guarde en una variable

//!var famiIncom = newFamily.pop();

document.write(famiIncom);
document.write('<br>');

//*push -- Agrega un elemento al final del arecglo
//! var familiaMax = familia.push('Juan');

//*shitf -- elimina el primer elemento del arecglo
//?Tambien sirve igual como el pop
//!familia.shif();

//* unshift -- Agrega un elemento al principio del arecglo
//?igual al anterior
//!familia.unshift('Tomas');

//*reverse -- ordena el arecglo al reves
var rever = familia.reverse();

