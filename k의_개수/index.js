function test(num, k){
    let cnt = 0;
    let temp = num+"";
    for ( let i=0;i<temp.length;i++){
        if ((temp).charAt(i) == k){
            cnt++;
        }
    }
    return cnt;
}
function solution(i, j, k) {
    var answer = 0;
    for ( let x=i;x<=j;x++){
        answer += test(x,k);
    }
    return answer;
}