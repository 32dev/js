function solution(strings, n) {
    strings = strings.sort(function (a, b) {
        var t = a.charAt(n).localeCompare(b.charAt(n));;
        console.log(a, b, t);
        if (t == -1) {
            return -1;
        } else if (t == 0) {
            t = a.localeCompare(b);
            return t;
        } else {
            return 1;
        }
    });
    return strings;

}
console.log(solution(["abce", "abcd", "cdx"], 2));