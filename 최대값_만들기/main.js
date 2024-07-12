function solution(numbers) {
    var answer = 0;
    let max = -100000000;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i; j < numbers.length; j++) {
            if (j != i) {
                console.log(numbers[i], numbers[j]);
                if (numbers[i] * numbers[j] >= max) {
                    max = numbers[i] * numbers[j];
                }
            }
        }
    }
    return max;
}
console.log(solution([1, 2, -3, 4, -5]));