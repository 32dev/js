function solution(str) {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        let r = parseInt(str.charAt(i));
        if (0 <= r && r <= 9) {
            array.push(r);
        }
    }
    array.sort(function (a, b) {
        return a - b;
    });
    return array;
}
console.log(solution("p2o4i8gj2", [2, 2, 4, 8]));