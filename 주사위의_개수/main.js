function solution(box, n) {
    // 각 차원에 들어갈 수 있는 주사위의 개수를 구함
    const maxInWidth = Math.floor(box[0] / n);
    const maxInHeight = Math.floor(box[1] / n);
    const maxInDepth = Math.floor(box[2] / n);

    // 전체 주사위의 개수는 각 차원에 들어갈 수 있는 개수를 곱한 것과 같음
    return maxInWidth * maxInHeight * maxInDepth;
}
solution([1, 1, 1], 1);
solution([10, 8, 6], 3);