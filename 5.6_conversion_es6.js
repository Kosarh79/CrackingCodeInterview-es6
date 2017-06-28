function bitSwaps(a, b){
  if(a === b) return 0
  let count = 0
  for(c = a^b; c!==0; c = c & (c-1)){

    count++
  }
  return count
}
