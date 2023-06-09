function solution(x, n) { //x만큼 간격이 있는 n개의 숫자
    var answer = [];
    var num = x;
    for(var i = 0; i<n; i++){
        answer[i] = num;
        num += x;
    }
    return answer;
}