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

  if (start[0] === end[0] && start[1] === end[1]) {
    console.log('The start field and the end field are the same:', start);
    return [start];
  }

  const visited = Array.from({ length: 8 }, () => Array(8).fill(false));

  const parentsMap = {};

  const q = [start];
  let index = 0;
  let endField = null;

  while (index < q.length) {
    const field = q[index++];

    if (visited[field[0]][field[1]]) continue;
    visited[field[0]][field[1]] = true;

    const nexts = possibleMoves(field).filter(
      (elem) => !visited[elem[0]][elem[1]]
    );
    q.push(...nexts);

    for (let move of nexts) {
      parentsMap[`${move[0]},${move[1]}`] = field;
      if (move[0] === end[0] && move[1] === end[1]) {
        endField = move;
        break;
      }
    }
    if (endField) break;
  }

  if (!endField) return null;

  const path = [];
  let curr = endField;

  for (let i = 0; ; i++) {
    path.push(curr);
    if (curr[0] === start[0] && curr[1] === start[1]) break;
    curr = parentsMap[`${curr[0]},${curr[1]}`];
  }

  path.reverse();

  console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
  for (let i = 0; i < path.length; i++) {
    console.log(path[i]);
  }

  return path;
}

knightMoves([0, 0], [7, 8]);
knightMoves([0, 0], [7, 7]);
knightMoves([0, 0], [0, 0]);
