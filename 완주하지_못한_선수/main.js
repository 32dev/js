
// function solution(participant, completion) {
//     for (var i = 0; i < completion.length; i++) {
//         for (var j = 0; j < participant.length; j++) {
//             if (participant[j] == completion[i]) {
//                 participant[j] = -1;
//                 break;
//             }
//         }
//     }
//     const result = participant.filter(p => p != -1);
//     return result[0];
// }

// solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]);