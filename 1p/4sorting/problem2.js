//Siobhan Jesús Martínez Martínez 3ºF
//2. selectionsort
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted
console.log("Selectionsort");
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
    for (var o=0; o<long; o++) {
        min=o;
        for (var i = o + 1; i <= long-1; i++ ) {
            if (ordenamiento[i] < ordenamiento[min]) {
                min=i;
                vueltas++;
            }
        }
        swap(ordenamiento, o, min);
    }

    console.log("Valores ordenados");
    console.log(ordenamiento);

    console.timeEnd('time');
    console.log("Cantidad de vueltas "+vueltas);
