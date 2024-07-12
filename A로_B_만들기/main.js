function solution(before, after) {
    let map = new Map();
    let beforeArray = before.split("");
    let afterArray = after.split("");
    beforeArray.forEach(
        element => {
            console.log(element)
            if (map.get(element) == undefined) {
                map.set(element, 1);
            } else {
                map.set(element, map.get(element) + 1);
            }
        }
    );
    afterArray.forEach(
        element => {
            console.log(element)
            if (map.get(element) == undefined) {
                return 0;
            } else {
                map.set(element, map.get(element) - 1);
            }
        }
    );
    for (let key of map.keys()) {
        if (map.get(key) != 0) {
            return 0;
        }
    }
    return 1;

}
solution("olleh", "hello");