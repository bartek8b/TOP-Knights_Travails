### The Odin Project > JavaScript Course > Project: Knights Travails

[Project requirements](https://www.theodinproject.com/lessons/javascript-knights-travails)

---

#### About this repo

This repository contains an implementation of the "Knights Travails" project in JavaScript. The main function uses breadth-first search (BFS) to find the shortest path a chess knight can travel between any two valid squares on a standard 8x8 board. The repo includes:

- Core logic for calculating legal knight moves.
- Pathfinding and path reconstruction algorithms.
- Console output with the number of moves and the sequence of positions taken.

#### How to use

Run the main script with Node.js:

```bash
node knightsTravails.js
```

You can modify the example calls at the bottom of the script (`knightMoves([startX, startY], [endX, endY])`) to test different positions. The program will display the minimal path as an array of coordinates and print the number of moves made.


