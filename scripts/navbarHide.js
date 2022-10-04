var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}


function DFS(node) {
  // Create a Stack and add our initial node in it
  let s = new Stack(this.nodes.length);
  let visited = new Set();
  s.push(node);

  // Mark the first node as explored
  visited.add(node);

  // We'll continue till our Stack gets empty
  while (!s.isEmpty()) {
    let t = s.pop();

    // Log every element that comes out of the Stack
    console.log(t);

    // 1. In the edges object, we search for nodes this node is directly connected to.
    // 2. We filter out the nodes that have already been explored.
    // 3. Then we mark each unexplored node as explored and push it to the Stack.
    this.edges[t]
      .filter(n => !visited.has(n))
      .forEach(n => {
        visited.add(n);
        s.push(n);
      });
  }
}