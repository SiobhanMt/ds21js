/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 *
 * PROBLEM 1
 * Queue implementation (array-based)
 *
 */
//Estructura cola basada en arreglos
function Queue() {
    this.dataStore = []; 
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}
//Funciones de cola
function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    return this.dataStore.shift();
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length-1];
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }else {
        return false;
    }
}
//Variable de instancia
var nom = new Queue();
//Agregar elementos
nom.enqueue("Siobhan");
nom.enqueue("Aleja");
nom.enqueue("Emily");

console.log(nom.toString()); //Cola completa
nom.dequeue(); //Se elimina el primer elemento de la cola
console.log(nom.toString()); 
console.log("Elemento frente de la cola " + nom.front()); //Elemento enfrente de la cola
console.log("Elemento fondo de la cola: " + nom.back()); //Elemento en fondo de la cola