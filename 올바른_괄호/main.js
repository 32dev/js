function solution(s) {
    var array = [];
    s = s.split("");

    var result = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] == '(') {
            result.push("(");
        } else if (s[i] == ')') {
            if (result.length <= 0) {
                return false;
            }
            result.pop();
        }
    }
    return result.length > 0 ? false : true;
}
solution("()())");