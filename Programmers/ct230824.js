function solution(k, score) {
    var answer = [];
    var nums = [];
    for(var i in score){
        nums.push(score[i]);
        nums.sort((a, b) => b - a);
        if(nums.length < k) answer.push(nums[nums.length - 1]);
        else answer.push(nums[k - 1]);
    }
    return answer;
}