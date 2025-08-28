// 5
// arr1[9, 20, 28, 18, 11]
// arr2[30, 1, 21, 17, 28]
function convert2(n, number) {
    return number.toString(2).padStart(n, 0);
}
function convertStr(str) {
    return str.replaceAll("1", "#").replaceAll("0", " ");
}
function arrayConvert(n, array) {
    let convertArray = [];
    for (let i = 0; i < array.length; i++) {
        // console.log(convertStr(convert2(n, array[i]))+"|");
        convertArray.push(convertStr(convert2(n, array[i])).split(""));
    }
    // console.log(convertArray);
    return convertArray;
}
function arrayOR(n, array1, array2) {
    let array = [];
    for (let i = 0; i < n; i++) {
        // console.log(array1[i] | array2[i]);
        array.push(array1[i] | array2[i])
    }
    // console.log(array);
    return array;
}
function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}


function solution(n, arr1, arr2) {
    let tempArray1 = arrayOR(n, arr1, arr2);
    // console.log(tempArray1);
    let tempArray2 = arrayConvert(n, tempArray1);
    console.log(tempArray2);
    let answer = [];
    for (let i = 0; i < tempArray2.length; i++) {
        answer.push(tempArray2[i].join(""));
    }
    // let tempArray3 = tempArray2.flat().join("");
    // console.log(tempArray3);
    // let tempArray4 = chunkArray(tempArray3,)
    // return tempArray3;
    console.log(answer);
    return answer;
}
solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])
// let test1 = convert2(5, 9);
// console.log(test1);
// let test2 = convertStr(test1);
// console.log(test2);
// arrayConvert(5, [9, 20, 28, 18, 11]);
// arrayOR(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]);