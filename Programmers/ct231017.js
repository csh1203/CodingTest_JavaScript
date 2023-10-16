function solution(s) {
    var answer = 0;
    let stack = [];
    for(let str of s){
        if(stack.length === 0) stack.push(str);
        else if(stack[stack.length - 1] === str) stack.pop();
        else stack.push(str);
    }
    if(stack.length === 0) answer = 1;
    return answer;
}