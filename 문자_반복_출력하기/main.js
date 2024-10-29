function solution(my_string, n) {
    var answer = '';
    for (var i = 0; i < my_string.length; i++) {
        let ch = my_string.charAt(i);
        for (var j = 0; j < n; j++) {
            answer += ch;
        }
    }
    return answer;
}