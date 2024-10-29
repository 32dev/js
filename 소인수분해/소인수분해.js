function primeFactorization(n) {
    const factors = [];
    let divisor = 2;

    while (n >= 2) {
        if (n % divisor === 0) {
            factors.push(divisor);
            n /= divisor; // 나눈 후 몫을 계속 처리
        } else {
            divisor++;
        }
    }

    return factors;
}

let set = new Set(primeFactorization(12));
console.log([...set]);