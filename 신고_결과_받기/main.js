


function solution(idList, reportList, k) {
    let map = new Map();
    for (let i = 0; i < idList.length; i++) {
        // console.log(idList[i]);
        // if (map.get() == undefined || map.get() == null) {
        map.set(idList[i], new Set());
        // }
    }
    // console.log(map);
    for (let i = 0; i < reportList.length; i++) {
        let [from, to] = reportList[i].split(" ");
        // console.log(from, to);
        map.get(from).add(to);
    }
    // console.log(map);
    let tmap = {};
    for (const key of map.keys()) {
        // console.log(key);
        const set = map.get(key);
        // console.log(key + "->");
        for (let item of set) {
            // console.log(item);
            if (tmap[item]) {
                tmap[item]++;  // 이미 있으면 +1
            } else {
                tmap[item] = 1; // 없으면 1로 초기화
            }
        }
    }
    // console.log(tmap);
    // console.log(map);
    let result = [];
    for (let id of idList) {
        let count = 0;
        for (let reportedUser of map.get(id)) {
            if (tmap[reportedUser] >= k) {
                count++;
            }
        }
        result.push(count);

    }
    return result;


}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));