import type { CellState } from "./cellState";

export class Cell {
  cellState: CellState;

  constructor(cellState: CellState) {
    this.cellState = cellState;
  }
}
