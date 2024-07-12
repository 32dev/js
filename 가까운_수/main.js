function solution(array, n) {
    let obj = {};
    let list = [];
    for (let i = 0; i < array.length; i++) {
        obj[array[i]] = Math.abs(array[i] - n);
        list.push(Math.abs(array[i] - n));
    }
    let min = Math.min(...list);
    console.log(min);
    let result = [];
    Object.keys(obj).forEach(key => {
        if (obj[key] == min) {
            result.push(key);
        }
    });
    return Math.min(...result);
}
solution([3, 10, 28, 12], 20)