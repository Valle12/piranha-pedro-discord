import type { Direction } from "./direction";

export class Turn {
  direction: Direction;
  distance: number;

  constructor(direction: Direction, distance: number) {
    this.direction = direction;
    this.distance = distance;
  }

  static indexToTurn(index: number): Turn {
    const direction = Math.floor(index / 3) as Direction;
    const distance = (index % 3) + 1;
    return new Turn(direction, distance);
  }
}
