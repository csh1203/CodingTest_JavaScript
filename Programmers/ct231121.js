function solution(progresses, speeds) {
    var answer = [];
    var cntDays = [];
    for(let i in progresses){
        cntDays.push(Math.ceil((100 - progresses[i]) / speeds[i]));
    }
    
    let max = cntDays[0];
    let cnt = 1;
    for(let i = 1; i<cntDays.length; i++){
        if(cntDays[i] <= max){
            cnt++;
        }else{
            max = cntDays[i];
            answer.push(cnt);
            cnt = 1;
        }
    }
    answer.push(cnt);
    return answer;
}