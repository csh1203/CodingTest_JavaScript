function solution(k, tangerine) {
    var answer = 0;
    
    let map = new Map();
    tangerine.forEach(a => {
        map.set(a, map.has(a) ? map.get(a) + 1 : 1);
    })
    
    let sortArr = [...map].sort((a, b) => b[1] - a[1]);
    
    sortArr.forEach(a => {
        if(k > 0){
            k -= a[1];
            answer++;
        }
    })
    
    return answer;
}