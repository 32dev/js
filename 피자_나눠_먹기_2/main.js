function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function solution(n) {
    // 6과 n의 최소공배수(LCM)를 구함
    const lcm = (6 * n) / gcd(6, n);
    // LCM을 6으로 나누어 필요한 피자 판 수를 계산
    return lcm / 6;
}