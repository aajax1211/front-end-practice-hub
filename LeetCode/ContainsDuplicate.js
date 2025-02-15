var containsDuplicate = function(nums) {
    let setNums = new Set(nums)
    
    if(nums.length > setNums.size){
        return true
    }else {
        return false
    }
};


