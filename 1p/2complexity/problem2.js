//Siobhan Jesús Martínez Martínez 3ºF
//2. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]

var num,inicio, aleatorio;
inicio=1;
num =  parseInt(prompt("Rango final para aparecer un numero random"));
aleatorio = inicio + Math.floor(Math.random() * num);

console.log("El numero aleatorio entre 1 y "+ num +" es: "+aleatorio);