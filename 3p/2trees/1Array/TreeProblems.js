/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * array-based implementation of trees
 * 
 * write it and make sure it runs
*/
//SIOBHAN JESUS MARTINEZ MARTINEZ


function node(data, left, right) { //Instancia para crear nodos...
    let Arraydata = [data];
    this.data = Arraydata;
    this.left = left;
    this.right = right;
    this.show = show;
}
//Objt ArbolBinarioBusqueda para funciones insert y funcion inorder
function BST() {                         
    this.root = null;
    this.insertBST = insertBST;
    this.inOrder = inOrder;
}
//Function mostrar nodos
function show() {
    return this.data;
}
//Function inorder para ordenar nodos
function inOrder(node) {
    if (!(node == null)) {
        inOrder(node.left);
        console.log(node.show() + " ");
        inOrder(node.right);
    }
}
//Funcion para insetar datos y condicionales para ordenarlos
function insertBST(data) {
    var vert = new node(data, null, null);
    if (this.root == null) {
        this.root = vert;
    }else{
        var corri = this.root;
        var padre;
        while (true) {
            padre = corri;
            if (data < corri.data) {
                corri = corri.left;
                if (corri == null) {
                    padre.left = vert;
                    break;
                }
            }else{
                corri = corri.right;
                if (corri == null) {
                    padre.right = vert;
                    break;
                }
            }
        }
    }
}
//Obj BST para posteriormente insertar los datos  
var numeros = new BST();                      
numeros.insertBST(560);
numeros.insertBST(120);
numeros.insertBST(210);
numeros.insertBST(430);
numeros.insertBST(460);
numeros.insertBST(650);
numeros.insertBST(120); //Busquea
numeros.insertBST(920);
console.log("DATOS INORDER: ");
//Poner los datos en la funcion inorder
inOrder(numeros.root );