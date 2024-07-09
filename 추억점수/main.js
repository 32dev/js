
let map = new Map();
function calculate(list) {
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        if (map.get(list[i]) == undefined) {
            sum += 0
        } else {
            sum += map.get(list[i])
        }
    }
    return sum;
}
function solution(name, yearning, photo) {
    var answer = [];
    for (let i = 0; i < name.length; i++) {
        map.set(name[i], yearning[i]);
    }
    let size = photo.length;
    let result = [];
    for (let i = 0; i < size; i++) {
        result.push(0);
    }
    for (let i = 0; i < size; i++) {
        result[i] = calculate(photo[i]);
    }
    return answer;
}
solution(
    ["may", "kein", "kain", "radi"],
    [5, 10, 1, 3],
    [
        ["may", "kein", "kain", "radi"],
        ["may", "kein", "brin", "deny"],
        ["kon", "kain", "may", "coni"]
    ]
);