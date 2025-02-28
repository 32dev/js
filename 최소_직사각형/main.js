function solution(array2d) {
    var maxW = Number.MIN_SAFE_INTEGER;
    var maxH = Number.MIN_SAFE_INTEGER;
    for (var i = 0; i < array2d.length; i++) {
        array2d[i] = array2d[i].sort(function (a, b) {
            return a - b;
        });
        if (array2d[i][0] >= maxW) {
            maxW = array2d[i][0];
        }

        if (array2d[i][1] >= maxH) {
            maxH = array2d[i][1];
        }
    }
    return maxW * maxH;
}
console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));