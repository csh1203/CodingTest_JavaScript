function solution(wallpaper) {
    var answer = [];
    var x = [];
    var y = [];
    for(var i in wallpaper){
        for(var j in wallpaper[i]){
            if(wallpaper[i][j] === '#') {
                y.push(j);
                x.push(i);
            }
        }
    }
    answer[0] = Math.min(...x);
    answer[1] = Math.min(...y);
    answer[2] = Math.max(...x) + 1;
    answer[3] = Math.max(...y) + 1;
    
    return answer;
}