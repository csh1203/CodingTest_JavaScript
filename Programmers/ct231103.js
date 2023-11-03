function solution(n) {
    var answer = 0;
    let fibo0 = 0
    let fibo1 = 1
    for(let i = 2; i<=n; i++){
        answer = (fibo0 + fibo1) % 1234567
        fibo0 = fibo1;
        fibo1 = answer;
    }
    return answer;
}