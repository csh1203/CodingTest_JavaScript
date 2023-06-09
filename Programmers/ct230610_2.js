function solution(x) { //하샤드 수
    var str = String(x).split("");
    var num = 0;
    for(var i = 0; i<str.length; i++){
        num += Number(str[i]);        
    }
    if(x % num == 0) return true;
    return false;
}