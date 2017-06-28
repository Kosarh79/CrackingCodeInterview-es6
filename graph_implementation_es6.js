class Graph{
  constructor(){
    this.nodes = new Set()
    this.edges = new Map()
  }

  addNode(node){
    this.nodes.add(node)
  }
  hasNode(node){
    return this.nodes.has(node)
  }
  removeNode(node){
    if(this.hasNode(node))
      this.nodes.delete(node)
  }
  addEdge(fromNode, toNode){
  //  this.edges[fromNode] = [fromNode, toNode]
    this.edges.set(fromNode, toNode)
  }
  hasEdge(fromNode, toNode){
    for(let [key, value] of this.edges.entries()){
      if((key === fromNode && value === toNode) || (key === toNode && value === fromNode)){
        return true
      }
    }
    return false
  }

  removeEdge(fromNode){
    
  }

}
