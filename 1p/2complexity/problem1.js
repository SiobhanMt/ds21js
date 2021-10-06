//Siobhan Jesús Martínez Martínez 3ºF
//1. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements

var num1, num2, cont=0, i, j;

num1= 2;
num2 =  parseInt(prompt("Hasta que numero se calcularán los numeros primos:"));

var primos=[];
for (i = num1; i <= num2; i++) {
    cont=0;
    for (j = 1; j < num2; j++) {
        if (i%j==0) {
            cont++;
        }
    }
    if (cont==2) {
        primos.push(i);
    }
}

console.log("Los numeros primos entre 2 y "+num2);
console.log(primos);