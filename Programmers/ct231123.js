function solution(want, number, discount) {
    let answer = 0
    discount.forEach((e, i) => {
        let obj = discount.slice(i, i+10);
        if(obj.length < 10) return answer;
        
        let cnt = 0;
        for(let j in want){
            if(obj.filter(e => e === want[j]).length === number[j]) cnt++;
            else break;
        }
        if(cnt === want.length) answer++;   
        
    })

     
  
    return answer;
}