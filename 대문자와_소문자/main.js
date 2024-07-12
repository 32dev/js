function toggleAlphabetCase(str) {
    let toggledStr = '';

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (/[a-z]/.test(char)) {
            toggledStr += char.toUpperCase();
        } else if (/[A-Z]/.test(char)) {
            toggledStr += char.toLowerCase();
        } else {
            toggledStr += char; // Non-alphabet characters remain unchanged
        }
    }

    return toggledStr;
}

function solution(my_string) {
    return toggleAlphabetCase(my_string);
}
solution('cccCCC');