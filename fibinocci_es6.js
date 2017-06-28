function fibonacci(n, arr){
  console.log(`n ${n}`);
  if(n===0 || n===1) return n
  if(!arr) arr = []
  if(!arr[n]) arr[n] = fibonacci(n-1, arr) + fibonacci(n-2, arr)
  return arr[n]
}
fibonacci(6) //8

//non-improved
function fibonacci2(n){
    console.log(`n ${n}`);
  if(n===0 || n===1) return n
//  if(!arr) arr = []
  return fibonacci(n-1) + fibonacci(n-2)
//  return arr[n]
}
fibonacci2(6)

function towerOfHanoi(n, from, to, aux){
	if(n===1){
		console.log(`move ${n}th disk from ${from} to ${to}`)
		return
	}
	towerOfHanoi(n-1, from, aux, to)
	console.log(`move ${n}th disk from ${from} to ${to}`)
	towerOfHanoi(n-1, aux, to, from)
}

towerOfHanoi(4, 'Origin', 'Destination', 'Aux')
