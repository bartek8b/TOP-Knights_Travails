const isOutOfBounds = (pos) =>
  pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7;

function possibleMoves(start) {
  const output = [];

  const moves = [
    [start[0] - 2, start[1] + 1],
    [start[0] - 2, start[1] - 1],
    [start[0] - 1, start[1] + 2],
    [start[0] - 1, start[1] - 2],
    [start[0] + 1, start[1] + 2],
    [start[0] + 1, start[1] - 2],
    [start[0] + 2, start[1] + 1],
    [start[0] + 2, start[1] - 1],
  ];

  for (let move of moves) {
    if (!isOutOfBounds(move)) output.push(move);
  }

  return output;
}

function knightMoves(start, end) {
  if (isOutOfBounds(start) || isOutOfBounds(end)) {
    console.error('Field coordinates must be in the range 0-7');
    return null;
  }

  const q = [start];
  const visited = Array.from({ length: 8 }, () => Array(8).fill(false));
  visited[start[0]][start[1]] = true;
}

// console.log(possibleMoves([0, 0]));
