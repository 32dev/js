function solution(participant, completion) {
    const map = new Map();

    // 참가자의 이름을 Map에 추가
    participant.forEach(p => {
        map.set(p, (map.get(p) || 0) + 1);
    });

    // 완주자 목록에서 Map의 값을 차감
    completion.forEach(c => {
        map.set(c, map.get(c) - 1);
    });

    // 값이 1인 참가자가 완주하지 못한 사람
    for (let [key, value] of map) {
        if (value > 0) {
            return key;
        }
    }
}
