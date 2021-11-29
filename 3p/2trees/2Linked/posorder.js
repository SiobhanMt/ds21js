/*
 PROBLEM 2
* posorder(n)
*
* traverses a tree in POSORDER

* posorder(root)
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

function posorder(n){
    if (n!==null){
          posorder(n.left)
          posorder(n.right)
          console.log(n.data);
      }
  }
posorder(s);  