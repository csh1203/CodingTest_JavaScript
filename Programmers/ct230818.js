function solution(n, m, section) {
    var answer = 1;
    let roll = section[0];
    for(let i = 1; i<section.length; i++){
        if(section[i] - roll >= m){
            roll = section[i];
            answer++;
        }
    }
    return answer;
}