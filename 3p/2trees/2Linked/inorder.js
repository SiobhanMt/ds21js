
/** INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * 
 * PROBLEM 1
 * inorder(n)
 *
 * traverses a tree in INORDER

 * inorder(root)
 * 
 * 
 */
//SIOBHAN JESUS MARTINEZ MARTINEZ
function Node(objeto){          
    this.data=objeto
    this.left=null
    this.right=null
}
let s = new Node('+');        
let nd1 = new Node(10);
let nd2 = new Node(3);

s.left = nd1  
s.right = nd2

function inorder(n){       
   if (n!==null){
        inorder(n.left);
        console.log(n.data);
        inorder(n.right);
    }
}
inorder(s);  