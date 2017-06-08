class LinkedList{
	constructor(){
		this.head = null
		this.tail = null
		this.count = 0
	}

	insertAtBegining(data){
		const node = {
			data:data,
			next:null
		}
		const tmpNode = this.head
		this.head = node
		this.head.next = tmpNode
		this.count++
		if(this.count === 1){
			this.tail = this.head
		}
  }

	insertAtEnding(data){
  	const node ={
			data:data,
			next:null
		}
		if(this.count === 0){
			this.head = node
		}
		else{
			this.tail.next = node
		}
		this.tail = node
		this.count++
  }
}
function sumLists(a1, a2){
  if(!a1 || !a2) return false
  function getResult (list){
    let n = list.head
    let r = 0, c = 1
    while(n !== null){
      r = r + n.data * c
      c = c * 10
      n = n.next
    }
    c= c/10
    return {c,r}
  }
  var r1 ,r2, result, counter, newList = new LinkedList()
  r1 = getResult(a1)
  console.log(`r1 ${r1.r}`);
  r2 = getResult(a2)
  console.log(`r2 ${r2.r}`);
  result = r1.r + r2.r
  counter = (r1.c>r2.c)?r1.c:r2.c
  console.log(`counter ${counter}`);
  console.log(`result ${result}`);
  while(counter >= 1){
    let q = Math.floor(result/counter)
    result = result % counter
    counter = counter/10
    newList.insertAtBegining(q)
  }
  return newList
}
var a1 = {
  head:{
    data:6,
    next:{
      data:9,
      next:{
        data:3,
        next:{
          data:1,
          next:null
        }
      }
    }
  }
}
var a2 = {
  head:{
    data:2,
    next:{
      data:1,
      next:{
        data:1,
        next:null
      }
    }
  }
}
sumLists(a1,a2)
