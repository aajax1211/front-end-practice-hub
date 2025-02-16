var productExceptSelf = function(nums) {
    let prefixProductArr = new Array(nums.length)
    prefixProductArr[0] = 1
    for (let i = 1; i < nums.length; i++){
        prefixProductArr[i] = prefixProductArr[i-1] * nums[i-1]
    }
    let sufixProduct = 1
    for(let i = nums.length -1 ; i >= 0; i--){
        prefixProductArr[i] = prefixProductArr[i] * sufixProduct
        sufixProduct = sufixProduct * nums[i]
    }
return prefixProductArr
};