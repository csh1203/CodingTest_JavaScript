function solution(ingredient) {
    var answer = 0;
    var array = [];
    for(var i of ingredient){
        array.push(i);
        if(array.slice(-4).join('') == '1231'){
            answer++;
            array.splice(-4);
        }
    }
    return answer;
}