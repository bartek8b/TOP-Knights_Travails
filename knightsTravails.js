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

  const visited = Array.from({ length: 8 }, () => Array(8).fill(false));

  const parentsMap = new Object();

  const q = [start];
  let index = 0;

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
    }

    //Dopisać co ma się stać gdy osiągnie end:    
    // > przerwać (break)
    // > już poza pętlą
    // > stworzyc tablice path
    // > wypelnic ją od konca
    // > odwrocić kolejnosc tablicy -> path.reverse(); modif oryginalnej tablicy!
  }
}
