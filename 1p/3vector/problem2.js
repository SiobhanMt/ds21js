//Siobhan Jesús Martínez Martínez 3ºF
/*
 * PROBLEM 2
 * removeAt(p)
 *
 * removes value at position p
 * @arg {number} p - position
 *
 * @example
 * removeAt(3)
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */

let array=[10,12,14,16,18,20];
console.log("Arreglo inicial: ");
console.log(array);

r = parseInt(prompt("Posición que desea remover"));
var aux = array.length;
if (r > aux) {
    console.log("Esta posición no existe");
}
else
{
    array.splice((r-1), 1);
}

console.log("Arreglo final: ");
console.log(array);