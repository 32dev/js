
class Number {
    constructor(num, index) {
        this.num = num;
        this.index = index;
    }
}

function solution(numlist, n) {
    let temp = [];
    for (let i = 0; i < numlist.length; i++) {
        let num = new Number(numlist[i], Math.abs(numlist[i] - n));
        temp.push(num);

    }
    temp.sort(function (numA, numB) {
        if (numA.index - numB.index == 0) {
            return numB.num - numA.num;
        } else {
            return numA.index - numB.index;
        }
    })
    let answer = [];
    for ( let i=0; i<temp.length;i++){
        answer.push(temp[i].num);
    }
    return answer;
}
console.log(solution([1, 2, 3, 4, 5, 6], 4));