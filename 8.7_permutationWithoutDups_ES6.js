        // function permutationWithoutDups(str, n, arr){
        //   if(!str || str.length === 0 || str.length === 1) return str
        //   n = n || 0
        //   arr = arr || []
        //   if(n === str.length) {
        //
        //     return arr
        //   }
        //   let tmp  = str.substr(0,n) + str.substr(n+1)
        // //  console.log(tmp);
        // //  console.log(str[n]);
        //   arr.push(str[n] + permutationWithoutDups(tmp,0,arr))
        //   arr.push(permutationWithoutDups(tmp,0,arr) + str[n])
        //   return permutationWithoutDups(str,n+1,arr)
        // }
        // console.log(permutationWithoutDups('abcdf'))

  function permutationWithoutDups(str, n, arr){
    if(!str || str.length === 0 || str.length === 1) return str
    n = n || 0
    arr = arr || []

    if(n === str.length) {
      return arr
    }
    let chr = str[n]
    let tmp  = str.substr(0,n) + str.substr(n+1)
    for(let i=0; i<tmp.length;i++){
      let s = tmp.substr(0,i) + chr + tmp.substr(i)
      arr.push(s)
    }
  //  console.log(tmp);
  //  console.log(str[n]);
  //  arr.push(str[n] + permutationWithoutDups(tmp,0,arr))
    //arr.push(permutationWithoutDups(tmp,0,arr) + str[n])
    return permutationWithoutDups(str,n+1,arr)
  }
  console.log(permutationWithoutDups('abcdf'))
