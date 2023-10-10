function solution(nums) {
    let arr = [];
    for(let i in nums){
        if(i == nums.indexOf(nums[i])) arr.push(nums[i]);
    }
    return Math.min(nums.length/2, arr.length);
}