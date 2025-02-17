function solution(s)
{
    let str = s+"";
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
        let num = Number(str.charAt(i));
        sum += num;
    }
    return sum;
}