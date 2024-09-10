function solution(n) {
    let arr = [];
    let count = 0;
    for (let i = 1; i < 300; i++) {
        if (i % 3 == 0 || (i + "").includes("3") == true) {
            arr.push(i);
            count++;
            if (count == 100) {
                break;
            }
        }
    }
    let arr2 = [];
    count = 0;
    for (let i = 1; i <= 300; i++) {
        if (!arr.find(element => element == i)) {
            arr2.push(i);
            count++;
            if (count == 100) {
                break;
            }

        }
    }
    console.log(arr2);
    return arr2[n-1];
}
console.log(solution(40));