let sizeMap = new WeakMap()
class BinarySearchTree{
  constructor(){
    sizeMap.set(this, 0)
  //  this.size = 0
    this.root = null
  }

  getSize(){
    return sizeMap.get(this)
  }

  insert(data){
    const node = {
      data:data,
      left:null,
      right:null
    }
    let size = this.getSize()
    if(size === 0){
      this.root = node
    }
    else{
      let r = this.root
       while(true){
         if(data <= r.data){
           if(r.left){
             r = r.left
           }
           else{
             r.left = node
             break
           }
         }
         else{
           if(r.right){
             r = r.right
           }
           else{
             r.right = node
             break
           }
         }
       }//END while
    }

      sizeMap.set(this, size + 1)
  }
  find(data){
    if(this.getSize() === 0) return null
    let node = this.root
    while(node){
      if(data === node.data) return node
      else if(data < node.data) node = node.left
      else node = node.right
    }
    return null
  }

  remove(data){
    let size = this.getSize()
    if(size === 0) throw new Error ('TREE EMPTY')
    let node = this.root
    let parent = null
    let direction = null
    while(node){
      if(data === node.data) {
        console.log(`found it ${data}`)
        if (!node.left && !node.right) node = null
        else if (!node.left || !node.right){
          parent[direction] = node.left || node.right
          node = null
        }
        else{
          let child = node.right
          while(true){
            if(!child.left){
              break
            }
            child = child.left
          }
          node.data = child.data
          child = null
        }
        break
      }
      else {
        parent = node
        if(data < node.data) {
          node = node.left
          direction = 'left'
        }
        else{
          node = node.right
          direction = 'right'
        }
      }
    }
      sizeMap.set(this, size - 1)
}

  getRandomNode(){
    if(this.getSize() === 0) return null
    function findRand(node, count, rand){
      if(!node) return null
        console.log(`getting random count => ${count} rand ${rand}`)
      if(count === rand) {
          console.log(node)
        return node
      }
      count++
      if(!findRand(node.left, count, rand)){
          count++
          findRand(node.right, count, rand)
      }
    }
    let rand = Math.floor(Math.random()*this.getSize()) + 1
      console.log(`random -> ${rand}   size ${this.getSize()}`)
    let count = 1;
    findRand(this.root, count, rand)
  }
}
let bst = new BinarySearchTree()
bst.insert(7)
bst.insert(2)
bst.insert(12)
bst.insert(1)
bst.insert(4)
bst.insert(9)
bst.insert(21)
bst.insert(0)
bst.insert(3)
bst.insert(5)
bst.insert(8)
bst.insert(10)
bst.insert(42)

console.log(bst);
//bst.remove(10)
//console.log(bst);
//bst.remove(2)
//console.log(bst.find(21));
console.log(bst.getRandomNode());
