
function solution(arr) {
    console.log(arr);
    arr.sort(function (a, b) { return b-a; });
    return arr[0]*arr[1];
}
solution([1, 2, 3, 4, 5]);