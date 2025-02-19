function solution(n) {
    var temp1 = Math.sqrt(n);
    if (Math.floor(temp1) === temp1) {
        return Math.pow(temp1 + 1, 2);
    } else {
        return -1;
    }
}
console.log(solution(121));