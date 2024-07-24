function solution(id_pw, db) {
    var answer = 'fail';
    for (let i = 0; i < db.length; i++) {
        if (db[i][0] == id_pw[0]) {
            if (db[i][1] == id_pw[1]) {
                return 'login';
            } else {
                answer = 'wrong pw';
            }
        }
    }
    return answer;
}
solution(["meosseugi", "1234"], [["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]]);
