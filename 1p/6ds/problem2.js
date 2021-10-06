//Siobhan Jesús Martínez Martínez 3ºF
// 2. Map
// a. produce 1e5 random names, ie name35927
// b. add each random name into a Map
// c. measure the time it took
// d. calculate the average of 7 runs

function generar(min, max){
    return Math.floor(Math.random() * (max - min))+ min;
}

const map= new Map();
let arraynum=[];
var suma=0, tiempo, start, prom;


for (let i = 0; i < 7; i++) {
    start = new Date(); 
    for (let j = 0; j < 100000; j++) {
        arraynum.push(generar(100000,1));
    }
    for (var h=0; h<10; h++){
        map.set('name'+arraynum[h],arraynum[h]);
    }
    tiempo = new Date() - start;
    suma+=tiempo;
}
prom = suma/7;
console.log("Tiempo promedio: "+prom+"ms");
console.log("Nombres: ");
console.log(map);