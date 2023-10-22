function solution(s) {
    var answer = [];
    var cnt = 0;
    var cnt0 = 0;
    
    while(s != '1'){
        var cnt1 = 0;
        for(let i in s){
            if(s.charAt(i) === '1') cnt1++;
            else cnt0++;
        }
        s = cnt1.toString(2);
        cnt++;
    }
    answer[0] = cnt;
    answer[1] = cnt0;
    return answer;
}