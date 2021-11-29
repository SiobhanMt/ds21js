/** INSTRUCTIONS
 * 
 * implement a method, function, non-function solution
 * 
 * PROBLEM 
 *
 * select one implementation af a graph from books (pdfs):
 * mcm14
 * gro14  
 *
 * write it and make sure it runs
 */
//SIOBHAN JESUS MARTINEZ MARTINEZ
 function Graph(v) { //Creación del grafo
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
       this.adj[i] = [];
       this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.showGraph = showGraph;
}
    function addEdge(v,w) { //Funcion que agrega aristas o arcos entre nodos
       this.adj[v].push(w);
       this.adj[w].push(v);
       this.edges++;
    }
    function showGraph() { //Funcion que muestra el grafo
       for (var i = 0; i < this.vertices; ++i) {
          console.log(i + " -> ");
          for (var j = 0; j < this.vertices; ++j) {
             if (this.adj[i][j] != undefined)
               console.log(this.adj[i][j] + ' ');
        }
    }
}

var g = new Graph(5); //Instancia para la creacion del grafo
g.addEdge(0,1); //Agregar las vertices
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph(); //Mostrar el grafo