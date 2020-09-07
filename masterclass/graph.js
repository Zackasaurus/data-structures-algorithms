class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertix(v) {
    this.adjacencyList[v] = [];
  }
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (item) => item !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (item) => item !== v1
    );
  }
  removeVertex(v) {
    this.adjacencyList[v].forEach((item) => {
      this.removeEdge(v, item);
    });
    delete this.adjacencyList[v];
  }
  //   uses helper function
  dfsR(v) {
    const result = [];
    const visited = {};

    const dfs = (v) => {
      if (visited[v]) return;
      result.push(v);
      visited[v] = true;
      this.adjacencyList[v].forEach((item) => {
        dfs(item);
      });
    };
    dfs(v);
    return result;
  }
  //   uses argument parameters
  dfsR2(v, result = [], visited = {}) {
    result.push(v);
    visited[v] = true;
    this.adjacencyList[v].forEach((item) => {
      if (!visited[item]) this.dfsR2(item, result, visited);
    });
    return result;
  }
  dfsI(n) {
    const result = [];
    const stack = [n];
    const visited = {};
    let node;
    while (stack.length > 0) {
      node = stack.pop();
      if (!visited[node]) {
        result.push(node);
        visited[node] = true;
        const list = this.adjacencyList[node];
        for (let i = list.length - 1; i >= 0; i--) {
          stack.push(list[i]);
        }
      }
    }
    return result;
  }
  dfsI2(n) {
    const result = [];
    const stack = [n];
    const visited = { [n]: true };
    let node;
    while (stack.length) {
      node = stack.pop();
      result.push(node);

      this.adjacencyList[node].forEach((item) => {
        if (!visited[item]) {
          visited[item] = true;
          stack.push(item);
        }
      });
    }
    return result;
  }
  bfs(n) {
    const result = [];
    const queue = [n];
    const visited = { [n]: true };
    let node;
    while (queue.length) {
      node = queue.shift();
      result.push(node);
      this.adjacencyList[node].forEach((item) => {
        if (!visited[item]) {
          visited[item] = true;
          queue.push(item);
        }
      });
    }
    return result;
  }
}

const g = new Graph();
g.addVertix("Tokyo");
g.addVertix("Berlin");
g.addVertix("LA");
g.addVertix("Miami");
g.addVertix("Paris");

g.addEdge("LA", "Tokyo");
g.addEdge("LA", "Miami");
g.addEdge("Tokyo", "Berlin");
g.addEdge("Miami", "Tokyo");
g.addEdge("LA", "Paris");

console.log(g);

console.log(g.dfsR("Tokyo"));
console.log(g.dfsR2("Tokyo"));
console.log(g.dfsI("Tokyo"));
console.log(g.dfsI2("Tokyo"));
console.log(g.bfs("Tokyo"));
