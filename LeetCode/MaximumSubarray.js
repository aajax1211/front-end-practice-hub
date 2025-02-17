function MaximumSubarray (nums){
    let currentSum = nums[0]
    let maxSum = nums[0]

    for(let i=1; i< nums.length ; i++){
        currentSum = Math.max(currentSum + nums[i], nums[i])
        maxSum = Math.max(currentSum, maxSum)
    }
    console.log(maxSum)
}

MaximumSubarray([1])