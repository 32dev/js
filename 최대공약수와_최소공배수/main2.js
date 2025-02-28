// 최대공약수(GCD) 계산 (유클리드 호제법)
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// 최소공배수(LCM) 계산
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}


function solution(n, m) {
    var answer = [gcd(n,m), lcm(n,m)];
    return answer;
}