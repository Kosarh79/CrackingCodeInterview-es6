let _nodes = new WeakMap()
let _map = new WeakMap()
class Graph{
  constructor(){
    _nodes.set(this, [])
    _map.set(this, new Map())
  }

  getNodes(){
    return _nodes.get(this)
  }

  getNode(name){
    if(!_map.has(this)){
      let node = new Project(name)
      _map.get(this).set(name, node)
      _nodes.get(this).push(name)
    }
    return _map.get(this).get(name)
  }

  addEdge(startName, finishName){
    let start = getNode(startName)
    let end = getNode(finishName)
    start.addNeighbor(end)
  }
}

//==============================//
let pMap = new WeakMap()
let internal  = function(object){
  if(!pMap.has(object))
    pMap.set(object, {})
  return pMap.get(object)
}
class Project{
  constructor(name){
    internal(this).name = name
    internal(this).children = []
    internal(this).map = new Map()
    internal(this).dependencies = 0
  }
  /*@node of type Project */
  addNeighbor(node){
    if(!node instanceof Project) throw new Error('Input not type of Project')
    if(!internal(this).map.get(node.getName())){
      internal(this).map.set(node.getName(), node)
      internal(this).children.push(node)
      node.incrementDependencies()
    }
  }

  getName(){return internal(this).name}
  getChildren(){return internal(this).children}
  getNumberDependencies(){return internal(this).dependencies}
  incrementDependencies(){internal(this).dependencies++}
  decrementDependencies(){internal(this).dependencies--}
}

/**
  @projects array
  @dependencies two-dementional array
*/
function buildGraph(projects, dependencies){
  var graph = new Graph()
  graph = projects.map((p)=>{
    return graph.getNode(p)
  })
  graph = dependencies.map((d)=>{
    let first = d[0]
    let second = d[1]
    return graph.addEdge(first, second)
  })
}
/**
@order is an array of items of type Project
@projects is an array of items of type Project
@offset is a type of Integer
*/
function addNonDependencies(_order, projects, endOfList){
  if(!projects || ! projects.length) throw new Error('WRONG PROJECTS INPUT')
  var order = _order.slice(0) || []
  endOfList = endOfList || 0
  for(var i=0; i<projects.length; i++){
    let p = projects[i]
    if(p.getNumberDependencies() === 0){
      _order[endOfList] = p
      endOfList++
    }
  }
  return {order, endOfList}
}
/**@projects is an Array of items of type of Project */
function orderProjects(projects){
  var order = []
  var _addNonDependencies = addNonDependencies(order, projects, 0)
  var endOfList = _addNonDependencies.endOfList
  order = _addNonDependencies.order
  var toBeProcessed = 0
  while(toBeProcessed < order.length){
    let current = order[toBeProcessed]
    /**we have a circular dependency since there are no projects with zero dependenvies */
    if(current === null) return null
    let children = current.getChildren()
    children.map((c)=>{
      return c.decrementDependencies()
    })
    _addNonDependencies = addNonDependencies(order, children, endOfList)
    endOfList = _addNonDependencies.endOfList
    order = _addNonDependencies.order
    toBeProcessed++
  }
  return order
}
/**@projects is an Array of names of type of String
  @dependencies two-dementional array */
function findBuildOrder(projects, dependencies){
  var graph = buildGraph(projects, dependencies)
  return orderProjects(graph.getNodes())
}
