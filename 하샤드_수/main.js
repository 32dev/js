function solution(x) {

    if (x % sum(x) == 0) {
        return true;
    } else {
        return false;
    }

}
function sum(n) {
    var array = (n + "").split("");
    console.log(array);
    var result = 0;
    for (let i = 0; i < array.length; i++) {
        result += parseInt(array[i]);
    }
    console.log(result);
    return result;
}