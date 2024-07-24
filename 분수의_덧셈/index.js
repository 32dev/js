// 최대공약수(GCD)를 구하는 함수
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

// 분수의 합을 구하고 기약분수로 만드는 함수
function solution(numer1, denom1, numer2, denom2) {
    // 분모의 최소공배수를 구합니다.
    let commonDenominator = lcm(denom1, denom2);
    
    // 각 분수를 공통 분모를 가지도록 변환합니다.
    let numer1Converted = numer1 * (commonDenominator / denom1);
    let numer2Converted = numer2 * (commonDenominator / denom2);
    
    // 변환된 분수들을 더합니다.
    let sumNumerator = numer1Converted + numer2Converted;
    let sumDenominator = commonDenominator;
    
    // 기약분수로 변환하기 위해 최대공약수를 구합니다.
    let greatestCommonDivisor = gcd(sumNumerator, sumDenominator);
    
    // 분자와 분모를 최대공약수로 나누어 기약분수를 구합니다.
    let reducedNumerator = sumNumerator / greatestCommonDivisor;
    let reducedDenominator = sumDenominator / greatestCommonDivisor;
    
    // 결과를 배열로 반환합니다.
    return [reducedNumerator, reducedDenominator];
}