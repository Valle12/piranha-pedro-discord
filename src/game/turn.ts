import type { Direction } from "./direction";

export class Turn {
  direction: Direction;
  distance: number;

  constructor(direction: Direction, distance: number) {
    this.direction = direction;
    this.distance = distance;
  }
}
