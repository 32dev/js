function count(n) {
    var binary = n.toString(2);
    var array = binary.split("");;
    var result = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] == '1') {
            result++;
        }
    }
    return result;
}
function solution(n) {
    for (var i = n + 1; i <= 1000000; i++) {
        if (count(n) == count(i)) {
            return i;
        }
    }
}
console.log(solution(78));