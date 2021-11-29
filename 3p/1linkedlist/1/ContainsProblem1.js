/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * contains(v)
 *
 * look up for value v in the linked list
 * @arg {type} v - value; may be of chars, numbers, u objects
 * @returns {bool} - true of false, if value v exist or not
 * may use traverse
 *
 * @example
 * contains(3)

 */
//SIOBHAN JESUS MARTINEZ MARTINEZ

function Node(data) {
    this.data = data                 
    this.next = null                  
}
 
function LinkedList(n) {
    this.head = n
    this.tail = n
    this.size = 1
 
    this.prepend = prepend
    this.traverse = traverse
    this.contains = contains
}
//Poner un elemento antes de...
function prepend(n){
    n.next = this.head
    this.head=n
    this.size++
}

//Recorrido traverse en la lista...
function traverse(){
    let c=this.head
    while(c){
        console.log(c.data)
        c=c.next
    }
    console.log('\n')
}
 
let n1=new Node(1); //Crear un nodo

let listaa=new LinkedList(n1); //Agregar nodos en la lista
listaa.prepend(new Node(2)); 
listaa.prepend(new Node(3));
listaa.prepend(new Node(4));

listaa.traverse(); //Recorrido

//Contenedores, ver nodos en la lista...
function contains(element) {
    let lista=this.head               
    let exist=false

    while(lista){
        if (lista.data==element ) { //Ver si existe el elemento
            exist=true;
        }
        lista=lista.next //Recorrido dentro de la lista
    }
    console.log(exist)
}


listaa.contains(6); //¿Existen?
listaa.contains(5);
listaa.contains(4);
listaa.contains(3);
