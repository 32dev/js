
function indexOfAll(str, search) {
    const indices = [];
    let index = str.indexOf(search);
    
    while (index !== -1) {
        indices.push(index);
        index = str.indexOf(search, index + search.length); // 다음 인덱스 찾기
    }
    
    return indices;
}


function solution(my_string, letter) {
    
    let indexList =  indexOfAll(my_string, letter);
    let result = '';
    for ( let i=0; i<my_string.length;i++){
        if ( indexList.includes(i)){
            continue;
        }else{
            result+= my_string.charAt(i);
        }
    }
    console.log(result);
    return result;

}
solution("BCBdbe", "B")