function groupAnagram(a){
  if(!a || !a.length || a.length <3) return a
  let map = new Map()
  for(let i=0; i<a.length; i++){
    let item = a[i]
    let str = item.split('').sort().join('')
    let m = map.get(str)
    if(!m) map.set(str, [item])
    else m.push(str)
  }
  let result = []
  for(let [key, value] of map.entries()){
    result = result.concat(value)
  }
  return result
}

var a = ['earth', 'moon', 'mars', 'noom', 'nomo', 'sarm', 'amrs', 'mnoo','sun']
console.log(groupAnagram(a));
