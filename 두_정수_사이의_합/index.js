function solution(a, b) {
    var answer = 0;
    var temp = b;
    if (a >= b ){
        b = a;
        a = temp;
    }
    for ( let i=a;i<=b;i++){
        answer += i;
    }
    return answer;
}
console.log(solution(3, 3));
