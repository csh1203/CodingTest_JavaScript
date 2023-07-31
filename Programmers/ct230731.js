function solution(arr) {
    if(arr.length <= 1) return [-1];
    else{
        return arr.filter((a) => a !== (Math.min(...arr)))
    }
}