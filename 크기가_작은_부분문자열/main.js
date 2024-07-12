function solution(t, p) {
    var answer = 0;
    var length = p.length;
    for (let i = 0; i < t.length - length + 1; i++) {
        let temp = t.substring(i, i + length);
        console.log(temp);
        if (parseInt(temp) <= parseInt(p)) {
            answer++;
        }
    }
    return answer;
}
console.log(solution("500220839878", "7"));