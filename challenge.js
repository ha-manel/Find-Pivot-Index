var pivotIndex = function(nums) {
  // Calculate total sum of the array
    let total = 0;
    nums.forEach(num => total+=num);
    
  // Calculate left side and compare it to right side
    let leftSide = 0;
    for(let i=0; i<nums.length; i++) {
        if(leftSide === (total - leftSide - nums[i])) return i;
        leftSide += nums[i];
    }
    return -1;
};
