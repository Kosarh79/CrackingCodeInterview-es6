class LinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.count = 0
  }

  size(){
    return this.count
  }

  add(key, value){
      if(!key || !value) throw new Error('NO INPUT')
    const node = {
      key:key,
      value:value,
      next:null,
      prev:null
    }
    if(this.count === 0){
      this.head = node
      this.tail = node
    }
    else{
      let temp = this.tail
      this.tail = node
      temp.next = this.tail
      this.tail.prev = temp
    }
    this.count++
  }

  find(key){
    if(!key) throw new Error('NO INPUT')
    let node = this.head
    while(node){
      if(node.key === key){
        return node
      }
      else{
        node = node.next
      }
    }
    return null
  }

  remove(key){
    if(!key) throw new Error('NO INPUT')
    let node = this.find(key)
    if (!node) return false
    let prev = node.prev
    let next = node.next
    prev.next = next
    next.prev = prev
    this.count--
    return true
  }
}
var l  = new LinkedList()

class HashTable{
  constructor(n){
    if(!n || !Number(n)) throw new Error('WRONG LIMIT')
    this.storage = []
    this.limit = n
    this.count = 0
  }

  hash(key){
    return key.length % this.limit
  }
  resize(){
    if (this.count === this.limit) this.limit = 2 * this.limit
  }
  set(key, value){
    this.resize()
    let hash = this.hash(key)
    let item = this.storage[hash]
    if(!item) {
      item = new LinkedList()
      item.add(key, value)
      this.storage[hash] = item
    }
    else{
      //Resolving collusion
      //item = this.storage[hash]
      if(!item.find(key)){
        item.add(key, value)
      }
    }
    this.count++
  }
  get(key){
    let hash = this.hash(key)
    let item = this.storage[hash]
    if(!item) return null
    return item.find(key)
  }
}

var h = new HashTable(20)
h.set('Milky Way Length', '1,000,000,000,000,000,000 km')
h.set('Moon', '238,900 mi')
h.set('Mars', '54.6 million kilometers')
h.set('Sun', '92.96 million mi')
