/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * linked-list (stack/queue) implementation exercise
 * 
 * zeeAlso edmodo
 * 
 * 
 * Analiza la complejidad computacional de algoritmos sobre 3F PILAS con implementaciones basadas en arreglos y 
 * listas enlazadas. Elabora un concentrado con el tiempo y el número de pasos que le llevó a cada implementación 
 * agregar 10,000 elementos en 7 corridas. Incluye también los promedios correspondientes.

REQUERIMIENTOS
- implementación basada en arreglos
- implementación basada en listas enlazadas
- método para generar  números aleatorios entre [1-10,000]
- método para medir el tiempo entre el inicio y fin de la ejecución
 */

//SIOBHAN JESUS MARTINEZ MARTINEZ
var a=0;
var suma=0, tiempo, start, prom;

for (let i = 0; i < 7; i++) { //Correr el programa 7 veces
    start = new Date(); //Inicio del tiempo
  //Pila usando listas enlazadas
function stackUsingLL(){
    //Node 
    let Node = function(elm){
      this.element = elm;
      this.next = null;
    }
    //Para tener el tamaño
    let length = 0;
   //Para seguir la lista
    let head = null;
    //Push de datos en la pila o stack
    this.push = function(elm){
      //Crear nuevo nodo
      let node = new Node(elm),
      current;
      //Añadir el nodo a la cima o arriba
      current = head;
      node.next = current;
      head = node;
      
      length++;
    }
    //Pop del ultimo item del stack
    this.pop = function(){
      let current = head;
      //Sí hay elemento lo elimina y 
      //el siguiente ahora es el primero
      if(current){
        let elm = current.element;
        current = current.next;
        head = current;
        length--;
        return elm;
      }
      return null;   
    }
    
    //Función para mostrar el elemento head de la pila
    this.peek = function(){    
      if(head){    
        return head.element;
      }
      return null;
    }
    //Convierte el stack en un Array
    this.toArray = function(){
      let arr = [];
      let current = head;
      while(current){
        arr.push(current.element);
        current = current.next;
      }
      return arr;
    }
    //Regresa el tamaño de la pila
    this.size = function(){
      return length;
    }
    //Limpia la pila
    this.clear = function(){
      head = null;
      length = 0;
    }
  }
  //Generador de numeros aleatorios
    function generar(min, max){
        return Math.floor(Math.random() * (max - min))+ min;
    }
    let stack = new stackUsingLL();   //Crea una instancia de stack
    //Crear 10k numeros entre 1 y 10k
    for (let i = 0; i < 10000; i++) {
        stack.push(generar(10001,1));//Push en la pila
    }
    console.log(stack.toArray());
    console.log(stack.size());
    tiempo = new Date() - start;
    suma+=tiempo;
    a++;
    console.log("Tiempo en corrida [ "+a+" ]: "+tiempo+"ms");
    stack.clear(); 
    
}
prom = suma/7;
console.log("Tiempo promedio: "+prom+"ms");
