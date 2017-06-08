class MinHeap{
  constructor(n){
    this.capacity = n
    this.size = 0
    this.items = []
  }

  function getLeftChildIndex(parentIndex) {return 2*parentIndex + 1}
  function getRightChildIndex(parentIndex) {return 2*parentIndex + 2}
  function getParentIndex(childIndex) { return (childIndex -1)/2}
  function hasLeftChild(index){return getLeftChildIndex(index) > this.size}
  function hasRightChild(index){return getRightChildIndex(index) > this.size}
  function hasParent(index){return getParentIndex(index) >= 0}
  function leftChild(index){return this.items[getLeftChildIndex(index)]}
  function rightChild(index){return this.items[getRightChildIndex(index)]}
  function parent(index){return this.items[getParentIndex(index)]}

  function swap(indexOne, indexTwo){
    var tmp = this.items[indexOne]
    this.items[indexOne] = this.items[indexTwo]
    this.items[indexTwo] = tmp
  }

  peek(){
    if(this.size === 0) throw new Error ('Heap Empty')
    return this.items[0]
  }

  poll(){
    if(this.size === 0) throw new Error ('Heap Empty')
    int item = this.items[0]
    this.items[0] = this.items[this.size - 1]
    this.size--
    heapifyDown()
    return item
  }
  add(item){
    this.items[this.size] = item
    this.size++
    heapifyUp()
  }
  heapifyUp(){
    var index = this.size - 1
    while(hasParent(index) && parent(index) > this.items[index]){
      swap(index, getLeftChildIndex(index))
      index = getParentIndex(index)
    }
  }

  heapifyDown(){
    var index = 0
    while(hasLeftChild){
      let smallerIndex = getLeftChildIndex(index)
      if(hasRightChild(index) && rightChild(index) < leftChild(index)){
        smallerIndex = getRightChildIndex(index)
      }
      if(this.items[index] < this.items[smallerIndex]){
        break
      }
      else{
        swap(index, smallerIndex)
      }
      index = smallerIndex
    }

  }

}
