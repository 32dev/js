function solution(my_string) {
    let obj = {};
    let array = [];
    for (let i = 0; i < my_string.length; i++) {
        if (obj[my_string.charAt(i)] == undefined) {
            obj[my_string.charAt(i)] = i;
        } else {
            array.push(i);
        }

    }
    console.log(obj);
    console.log(array);
    let tempArray = my_string.split("");
    console.log(tempArray);
    for (let i = 0; i < array.length; i++) {
        tempArray[array[i]] = '';
    }
    console.log(tempArray.join(''));
    return tempArray.join('');

}
solution('people');