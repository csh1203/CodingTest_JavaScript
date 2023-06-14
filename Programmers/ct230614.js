function solution(money) { //아이스 아메리카노
    var answer = [parseInt(money / 5500), money % 5500];
    return answer;
}