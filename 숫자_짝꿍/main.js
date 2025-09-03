
function countNumbers(str) {
    const map = new Map();
    for (let ch of str) {
        // 기존에 있으면 +1, 없으면 1로 초기화
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    return map;
}
function expandMapByMinValue(mapA, mapB) {
    const result = [];
    for (const [key, countA] of mapA) {
        if (mapB.has(key)) {
            const countB = mapB.get(key);
            const minCount = Math.min(countA, countB); // 작은 값 기준
            for (let i = 0; i < minCount; i++) {
                result.push(key);
            }
        }
    }
    return result;
}


function solution(X, Y) {
    let xMap = countNumbers(X);
    let yMap = countNumbers(Y);
    let result = expandMapByMinValue(xMap, yMap).sort((a, b) => (b - a)).join("");
    if (parseInt(result) == 0) {
        return "0";
    } else {
        return result == "" ? "-1" : result;

    }
}
console.log(solution("5525", "1255"));