
function solution(str) {
    let arr = str.split(" ")
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 'Z') {
            sum += parseInt(arr[i]);
        } else {
            sum -= parseInt(arr[i - 1]);
        }
    }
    return sum;
}
console.log(solution("10 Z 20 Z 1"));