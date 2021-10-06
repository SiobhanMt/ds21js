//Siobhan Jesús Martínez Martínez 3ºF
//1. bubblesort
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted

console.log("Bubblesort");
    function generar(min, max){
        return Math.floor(Math.random() * (max - min))+ min;
    }
    let ordenamiento = [];
    for (let i = 0; i < 15; i++) {
        ordenamiento.push(generar(101,1));
    }
    console.log("Valores sin ordenar");
    console.log(ordenamiento);
    var swap = function(ord, i, i2){
        var aux = ord[i];
        ord[i] = ord[i2];
        ord[i2]= aux;
    }
     console.time('time');
    var vueltas = 0;
    let long = ordenamiento.length;
    for (var i=0; i<long; i++) {
        for (var j = 0; j < long-1; j++ ) {
            if (ordenamiento[j] > ordenamiento[j+1]) {
                swap(ordenamiento, j, j+1);
                vueltas++;
            }
        }
    }
    
    console.log("Valores ordenados");
    console.log(ordenamiento);

    console.timeEnd('time');
    console.log("Cantidad de vueltas "+vueltas);
