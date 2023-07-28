function solution(num_list) {
    var minus = num_list.filter(function(num){
        return num < 0;
    })
    if(minus.length === 0) return -1;
    else return num_list.indexOf(minus[0]);
}