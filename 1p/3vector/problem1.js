//Siobhan Jesús Martínez Martínez 3ºF
/*
 * PROBLEM 1
 * insertAt(p,v)
 *
 * inserts a value v, at position p, in the array
 * @arg {number} p - position
 * @arg {number} v - value
 *
 * @example
 * insertAt(3,3)
 * Verify operation result by outputing the array before and after
 */

var vl,ps;
let array=[10,12,14,16,18,20];
console.log("Arreglo inicial: ");
console.log(array);

Array.prototype.InsertAt = function (ps, vl){
    this.splice( ps, 0, vl );
}

vl =  parseInt(prompt("Valor a ingresar: "));
ps =  parseInt(prompt("Posición: 0 - 5: "));
array.InsertAt(ps, vl);

console.log("Arreglo final: ");
console.log(array);