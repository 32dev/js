function solution(my_string, num1, num2) {
    let array = my_string.split("");
    console.log(array);
    let temp = array[num1];
    array[num1] = array[num2];
    array[num2] = temp;
    result = array.join("");
    console.log(result);
    return result;
}
solution("hello", 1, 2);