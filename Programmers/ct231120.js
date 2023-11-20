function solution(n, words) {
    var answer = []; // 사람의 번호, 자신의 몇 번째 차례
    if(words[0].length <= 1) return [1, 1];
    
    for(let i = 1; i<words.length; i++){
        let lastWord = words[i - 1].charAt(words[i - 1].length - 1);
        let firstWord = words[i].charAt(0);
        if(lastWord != firstWord || words[i].length <= 1 || words.indexOf(words[i]) != i){
            let id = (i % n) + 1;
            let cnt = Math.ceil((i + 1) / n);
            return [id, cnt];
        }
    }

    return [0, 0];
}