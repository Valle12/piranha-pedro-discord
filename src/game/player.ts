export class Player {
  cardsPlayed: boolean[] = new Array(12).fill(false);
  stones = 4;
  piranhas = 0;
  isAi: boolean;

  constructor(isAi: boolean) {
    this.isAi = isAi;
  }
}
