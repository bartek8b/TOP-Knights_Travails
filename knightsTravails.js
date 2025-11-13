const isOutOfBounds = (pos) =>
  pos[0] < 0 || pos[0] > 7 || pos[1] < 0 || pos[1] > 7;

function knightMoves(start, end) {
  if (isOutOfBounds(start) || isOutOfBounds(end)) {
    console.error('Field coordinates must be in the range 0-7');
    return null;
  }
}

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

console.log(possibleMoves([0, 0]));
