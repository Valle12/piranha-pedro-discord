import type { Player } from "../game/player";
import type { Turn } from "../game/turn";

export abstract class AI {
  player: Player;

  constructor(player: Player) {
    this.player = player;
  }

  abstract addTurn(turns: Turn[]): void;
}
