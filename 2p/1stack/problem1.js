/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * Stack implementation (array-based)
 *
 */
//Stack basada en arreglos
 function Stack() {
    this.dataStore = []; //Array
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}
//FUNCIONES
//Funcion Push
function push(element) {
    this.dataStore[this.top++] = element;
}
//Funcion Peek
function peek() {
    return this.dataStore[this.top-1];
}
//Funcion Pop
function pop() {
    return this.dataStore[--this.top];
}
//Funcion Clear
function clear() {
    this.top = 0;
}
//Funcion length
function length() {
    return this.top;
}

var nom = new Stack(); //Variable de instancia

//Agregar elementos
nom.push("Alejandra");
nom.push("Pinky");
nom.push("Siobhan");

//Tamaño
console.log("Tamaño del stack: " + nom.length());
console.log(nom.peek()); //Se muestra el ultimo elemento

var popped = nom.push();
console.log("Elemento en Popped: " + popped);

console.log(nom.peek());
nom.push("Estrella");
console.log(nom.peek());

//Limpiar la pila
nom.clear();

console.log("Tamaño del stack: " + nom.length());
console.log(nom.peek());

nom.push("Siobhan Martínez");
console.log(nom.peek());