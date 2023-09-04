function solution(s) {
    var nums = s.split(' ').map(Number);
    return `${Math.min(...nums)} ${Math.max(...nums)}`;
}