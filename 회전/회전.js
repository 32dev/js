function solution(numbers, direction) {
    var answer = [];
    if (direction == "right") {
        numbers = [numbers.pop(), ...numbers];
        console.log(numbers);
    } else if (direction == "left") {
        console.log(numbers.push(numbers.shift()));
        console.log(numbers);
    }
    return answer;
}
solution([1, 2, 3], "right");