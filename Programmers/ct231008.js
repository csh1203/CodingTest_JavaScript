function solution(lottos, win_nums) {
    var answer = [];
    let zeroCount = 0;
    let correctCount = 0;
    
    for(let i in lottos){
        if(lottos[i] === 0) zeroCount++;
        else if(win_nums.indexOf(lottos[i]) !== -1) correctCount++;
    }
    if(7 - (correctCount + zeroCount) > 6) answer[0] = 6;
    else answer[0] = 7 - (correctCount + zeroCount);

    if(7 - correctCount > 6) answer[1] = 6;
    else answer[1] = 7 - correctCount;

    return answer;
}