import { Cell } from "./cell";
import { CellState } from "./cellState";

export class Board {
  width = 15;
  height = 11;
  board!: Cell[][];

  constructor() {
    this.init();
  }

  init() {
    this.board = new Array(this.height);
    for (let i = 0; i < this.height; i++) {
      this.board[i] = new Array(this.width);
      for (let j = 0; j < this.width; j++) {
        this.board[i][j] = new Cell(CellState.WATER);
      }
    }

    this.board[2][4] = new Cell(CellState.LAND);
    this.board[3][4] = new Cell(CellState.LAND);
    this.board[3][5] = new Cell(CellState.LAND);
    this.board[4][2] = new Cell(CellState.LAND);
    this.board[4][3] = new Cell(CellState.LAND);
    this.board[4][5] = new Cell(CellState.LAND);
    this.board[5][4] = new Cell(CellState.LAND);

    this.board[0][0] = new Cell(CellState.PIRANHA);
    this.board[0][13] = new Cell(CellState.PIRANHA);
    this.board[2][11] = new Cell(CellState.PIRANHA);
    this.board[7][12] = new Cell(CellState.PIRANHA);
    this.board[8][2] = new Cell(CellState.PIRANHA);
    this.board[8][13] = new Cell(CellState.PIRANHA);
    this.board[10][8] = new Cell(CellState.PIRANHA);

    this.board[4][4] = new Cell(CellState.PEDRO);
  }

  toString(): string {
    let boardString = "";
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {
        let box: string;
        switch (this.board[i][j].cellState) {
          case CellState.WATER:
            box = "🟦";
            break;
          case CellState.LAND:
            box = "🟨";
            break;
          case CellState.PEDRO:
            box = "🟩";
            break;
          case CellState.PIRANHA:
            box = "🟥";
            break;
          case CellState.STONE:
            box = "🟪";
            break;
        }
        boardString += box;
      }
      boardString += "\n";
    }
    return boardString;
  }
}
