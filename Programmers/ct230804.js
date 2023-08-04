function solution(cards1, cards2, goal) {
    var answer = "Yes";
    let index1 = 0;
    let index2 = 0;
    for(let s of goal){
        if(cards1[index1] === s){
            index1++;
            continue;
        }else if(cards2[index2] === s){
            index2++;
            continue;
        }
        answer = "No";
    }
    return answer;
}