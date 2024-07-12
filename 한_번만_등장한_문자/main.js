
function solution(s) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        if (obj[ch] == undefined) {
            obj[ch] = 1;
        } else {
            obj[ch]++;
        }
    }
    console.log(obj);
    let keys = Object.keys(obj).sort();
    let result = "";
    keys.forEach(key => {
        console.log(obj[key]);
        if (obj[key] == 1) {
            result += key;
        }
    })
    console.log(result);
    return result;

}
console.log(solution("abdc"));