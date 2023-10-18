function solution(s) {
    var answer = '';
    let cnt = 0;
    var pattern = /[a-zA-Z]/;
    for(let str of s){
        if(cnt === 0 && pattern.test(str)){
            answer += str.toUpperCase();
            cnt++;
        }else{
            answer += str.toLowerCase();
            cnt++;
        }
        if(str === ' ') cnt = 0;
    }
    return answer;
}