function solution(s) {
    var answer = [];
    let numsSplit = s.replace("{{", "").replace("}}", "").split("},{");
    
    let numsArr = [];
    numsSplit.forEach(e => {
        numsArr.push(e.split(","));
    })
    
    numsArr.sort((a, b) => {
        if(a.length > b.length) return 1;
        else if(a.length === b.length) return 0;
        else return -1;
    })
    
    for(let x of numsArr){
        for(let y of x){
            if(answer.indexOf(parseInt(y)) === -1) answer.push(parseInt(y));
        }
    }
    return answer;
}