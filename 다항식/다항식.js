function solution(str) {
    let arr = str.split("+");
    let xSum = 0;
    let iSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let t = arr[i].trim();
        if (t.includes('x')) {
            let coefficient = t.replace("x", "").trim();
            xSum += coefficient === '' ? 1 : parseInt(coefficient, 10);
        } else {
            iSum += parseInt(t, 10);
        }
    }

    let result = '';
    if (xSum > 0) {
        result += xSum === 1 ? "x" : xSum + "x";
    }
    if (iSum > 0) {
        result += (xSum > 0 ? " + " : "") + iSum;
    }

    return result || "0"; // 결과가 없을 경우 0 반환
}

console.log(solution("x + x + x")); // "3x"
console.log(solution("3x + 7 + x")); // "4x + 7"
console.log(solution("5 + 3 + x")); // "8"
