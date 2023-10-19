function solution(n) {
    var answer = 0;
    let before = n.toString(2).split('1').length;
    while(true){
        n++;
        let after = n.toString(2).split('1').length;
        if(before === after){
            answer = n;
            break;
        }
    }
    return answer;
}