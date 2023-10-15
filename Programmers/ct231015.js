function solution(s) {
    var answer = 0;
    for(let i in s){
        let str = s.substring(i, s.length) + s.substring(0, i);
        let stack = [];
        for(let j in str){
            let char = str.charAt(j);
            if(stack.length === 0) stack.push(char);
            else{
                if(stack[stack.length - 1] === '[' && char === ']'){
                    stack.pop();
                }else if(stack[stack.length - 1] === '{' && char === '}'){
                    stack.pop();
                }else if(stack[stack.length - 1] === '(' && char === ')'){
                    stack.pop();
                }else{
                    stack.push(char);
                }
            }
        }
        if(stack.length === 0) answer++;
    }
    return answer;
}