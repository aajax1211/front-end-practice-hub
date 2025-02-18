var maxProduct = function(nums) {
    if(nums.length ===0){
        return
    }
     let currentProduct = nums[0]
    let minProduct = nums[0]
    let maxProduct = nums[0]

    for(let i=1; i< nums.length ; i++){
        let tempMax = currentProduct
        currentProduct = Math.max(nums[i] *minProduct ,currentProduct * nums[i], nums[i])
        minProduct = Math.min(nums[i] *minProduct ,tempMax * nums[i], nums[i])
        maxProduct = Math.max(currentProduct, maxProduct)
    }
    return maxProduct
};