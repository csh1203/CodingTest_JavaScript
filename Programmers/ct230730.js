function solution(my_string, is_suffix) {
    var string_last = my_string.charAt(my_string.length-1);
    var suffix_last = is_suffix.charAt(is_suffix.length-1);
    if(my_string.includes(is_suffix) && string_last === suffix_last) return 1;
    else return 0;
}