const TwoSum = (arr,target) => {
let hashMap = new Map()
let indices = []

for(let i=0 ; i < arr.length ; i++){
let dif = target - arr[i]

if(!hashMap.has(dif)){
    hashMap.set(arr[i], i)
}else{
    indices[0] = hashMap.get(dif)
    indices[1] = i
    break
}
}
return indices;
}

let result = TwoSum([1,2,3,4], 6)

console.log(result)