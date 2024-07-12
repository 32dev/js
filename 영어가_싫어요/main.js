function solution(numbers) {
    var answer = 0;
    let map = new Map();
    map.set('zero', 0);
    map.set('one', 1);
    map.set('two', 2);
    map.set('three', 3);
    map.set('four', 4);
    map.set('five', 5);
    map.set('six', 6);
    map.set('seven', 7);
    map.set('eight', 8);
    map.set('nine', 9);

    let array = [
        'zero',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i], map.get(array[i]));
        numbers = numbers.replaceAll(array[i], map.get(array[i]));
    }
    console.log(numbers);
    return parseInt(numbers);
}
solution('onefourzerosixseven');