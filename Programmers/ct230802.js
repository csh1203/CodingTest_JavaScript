function solution(todo_list, finished) {
    var answer = todo_list.filter((data, i) => !(finished[i]));
    return answer;
}