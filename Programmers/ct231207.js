function solution(clothes) {
    var answer = 1;
    let map = new Map();
    clothes.forEach(e => {
        let key = e.length - 1;
        map.set(e[key], map.has(e[key]) ? map.get(e[key]) + e.length - 1 : e.length - 1);
    })
    
    map.forEach(e => {
        answer *= e + 1;
    });
    
    return answer - 1;
}