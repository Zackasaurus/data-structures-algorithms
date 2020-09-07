const util = require("util");

class Node {
  constructor(node, weight) {
    this.node = node;
    this.weight = weight;
  }
}
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertix(v) {
    if (!this.adjacencyList[v]) this.adjacencyList[v] = [];
  }
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push(new Node(v2, weight));
    this.adjacencyList[v2].push(new Node(v1, weight));
  }
}
const g = new WeightedGraph();

g.addVertix("Tokyo");
g.addVertix("Berlin");
g.addVertix("LA");
g.addVertix("Miami");
g.addVertix("Paris");

g.addEdge("LA", "Tokyo", 200);
g.addEdge("LA", "Miami", 100);
g.addEdge("Tokyo", "Berlin", 300);
g.addEdge("Miami", "Tokyo", 300);
g.addEdge("LA", "Paris", 150);

console.log(util.inspect(g, false, null, true));
