function solution(keyinput, board) {
  // 시작 좌표
  let x = 0;
  let y = 0;

  // 보드의 경계 계산
  const xMax = Math.floor(board[0] / 2); // 최대 x 좌표
  const yMax = Math.floor(board[1] / 2); // 최대 y 좌표

  // 방향키 입력 처리
  for (let i = 0; i < keyinput.length; i++) {
      switch (keyinput[i]) {
          case 'left':
              if (x > -xMax) x--; // 경계 체크 후 이동
              break;
          case 'right':
              if (x < xMax) x++; // 경계 체크 후 이동
              break;
          case 'up':
              if (y < yMax) y++; // 경계 체크 후 이동
              break;
          case 'down':
              if (y > -yMax) y--; // 경계 체크 후 이동
              break;
      }
  }

  return [x, y]; // 최종 좌표 반환
}

// 테스트 케이스
console.log(solution(["left", "right", "up", "right", "right"], [11, 11])); // [2, 1]
console.log(solution(["down", "down", "down", "down", "down"], [7, 9])); // [0, -4]
