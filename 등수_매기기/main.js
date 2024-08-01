function solution(score) {
    // 평균 점수를 계산하고 각 학생의 인덱스와 함께 배열로 저장
    const avgScores = score.map((s, index) => ({
        index,
        avg: (s[0] + s[1]) / 2
    }));

    // 평균 점수를 기준으로 내림차순 정렬
    avgScores.sort((a, b) => b.avg - a.avg);

    // 등수를 저장할 배열 초기화
    const ranks = new Array(score.length).fill(0);
    
    let rank = 1; // 현재 등수
    for (let i = 0; i < avgScores.length; i++) {
        // 첫 번째 학생이 아니고, 현재 학생의 평균 점수가 이전 학생의 평균 점수와 다르면
        if (i > 0 && avgScores[i].avg !== avgScores[i - 1].avg) {
            // 현재 순위는 이전 학생까지의 순위를 반영하여 업데이트
            rank = i + 1;
        }
        // 현재 학생의 인덱스에 해당하는 ranks 배열에 등수 저장
        ranks[avgScores[i].index] = rank;
    }

    return ranks;
}

// 테스트
console.log(solution([[80, 70], [90, 50], [40, 70], [50, 80]])); 
