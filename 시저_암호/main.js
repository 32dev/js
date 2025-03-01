
function solution(s, n) {
    var lower = [];
    var upper = [];

    for (var i = 'a'.charCodeAt(); i <= 'z'.charCodeAt(); i++) {
        lower.push(String.fromCharCode(i))
        upper.push(String.fromCharCode(i - 32));
    }
    var answer = "";
    for (var i = 0; i < s.length; i++) {
        var ch = s.charAt(i);
        if ('A'.charCodeAt() <= ch.charCodeAt() && ch.charCodeAt() <= 'Z'.charCodeAt()) {
            answer += upper[(ch.charCodeAt() - 65 + n) % upper.length];
        } else if (('a'.charCodeAt() <= ch.charCodeAt() && ch.charCodeAt() <= 'z'.charCodeAt())) {
            answer += lower[(ch.charCodeAt() - 97 + n) % lower.length];
        } else {
            answer += ch;
        }

    }
    return answer;
}
console.log(solution("z", 1));