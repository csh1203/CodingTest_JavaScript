function solution(n, arr1, arr2) {
    var answer = [];
    for(let i in arr1){
        let num1 = arr1[i].toString(2).padStart(n, '0');
        let num2 = arr2[i].toString(2).padStart(n, '0');
        let mapCode = '';
        for(let j in num1){
            if(num1.charAt(j) === '1' || num2.charAt(j) === '1'){
                mapCode += "#"
            }else{
                mapCode += " ";
            }
        }
        answer.push(mapCode);
    }
    return answer;
}