function solution(n) {
    var answer = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (i * j == n) {
                console.log(i, j);
                answer++;
                break;
            }
        }
    }
    return answer;
}
solution(20);