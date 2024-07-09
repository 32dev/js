function solution(n) {
    var answer = 0;
    if (parseInt(Math.sqrt(n, 2)) * parseInt(Math.sqrt(n, 2)) == Math.sqrt(n, 2) * Math.sqrt(n, 2)) {
        answer = 1;
    } else {
        answer = 2;
    }
    return answer;
}