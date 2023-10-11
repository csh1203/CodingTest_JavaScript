function solution(answers) {
    var answer = [];
    first = [1, 2, 3, 4, 5];
    second = [2, 1, 2, 3, 2, 4, 2, 5];
    third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let firstCnt = 0;
    let secondCnt = 0;
    let thirdCnt = 0;
    for(let i in answers){
        if(answers[i] === first[i % first.length]) firstCnt++;
        if(answers[i] === second[i % second.length]) secondCnt++;
        if(answers[i] === third[i % third.length]) thirdCnt++;
    }
    let max = Math.max(firstCnt, secondCnt, thirdCnt);
    if(firstCnt === max) answer.push(1);
    if(secondCnt === max) answer.push(2);
    if(thirdCnt === max) answer.push(3);
    return answer;
}