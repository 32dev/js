function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 최소공배수(LCM)를 구하는 함수
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    // console.log(lcm(denom1, denom2));
    let temp = lcm(denom1, denom2);
    let tempA = temp / denom1;
    let tempB = temp / denom2;
    // console.log(tempA, tempB);
    // console.log(numer1 * tempA, denom1 * tempA, numer2 * tempB, denom2 * tempB);
    // console.log(numer1 * tempA + numer2 * tempB, denom1 * tempA);
    let tempC = gcd(numer1 * tempA + numer2 * tempB, denom1 * tempA);
    // console.log(numer1 * tempA + numer2 * tempB / tempC, denom1 * tempA / tempC);
    return [numer1 * tempA + numer2 * tempB / tempC, denom1 * tempA / tempC];
}
solution(1, 2, 3, 4);