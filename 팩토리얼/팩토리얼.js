function solution(t) {
    if ( t== 1){ return 1;}
    let n = 1;
    while (true) {
        if (t == 1) {
            return n - 1;
        } else if (t < 1) {
            return n - 2;
        }
        t = t / n++;
        console.log(t);
    }
}
console.log(solution(3628800));
console.log(solution(7));