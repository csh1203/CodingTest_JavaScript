function solution(number, limit, power) {
    var answer = 0;
    var cnt = 0;
    for(var i = 1; i<=number; i++){
        cnt = 1;
        for(var j = 1; j<=i/2; j++){
            if(i % j === 0) cnt++;
        }
        answer += cnt > limit ? power : cnt;
    }
    return answer;
}