/** the PROBLEM with arrays
 *
 * for instance, create 100000, then:
 * insert a new element at position 3
 * remove element at position 4
 * think about the operations that have to be carried out
 *
 * this section has NOT exercises
 */
//SIOBHAN JESUS MARTINEZ MARTINEZ
//Generador de numeros aleatorios
let arreglo = [];
function generar(min, max){
    return Math.floor(Math.random() * (max - min))+ min;
}

//Crear 100000 numeros entre 1 y 100
for (let i = 0; i < 100000; i++) {
    arreglo.push(generar(101,1));//Push en el array
}
console.log(arreglo);
arreglo.splice(3,0,444); //Agg
console.log(arreglo);
arreglo.splice(4,1); //Delete
console.log(arreglo);