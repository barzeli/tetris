import { Board } from "./board.js";
import { GAME_HEIGHT, GAME_WIDTH } from "./constants.js";
import { Piece } from "./piece.js";
import { isEndOfFall } from "./utils.js";

export class Game {
  board = new Board(GAME_WIDTH, GAME_HEIGHT);
  currentPiece = new Piece();
  heldPiece: Piece | null = null;
  nextPiece: Piece = new Piece();

  update() {
    if (isEndOfFall(this.currentPiece)) {
      this.board.addPiece(this.currentPiece);
      this.currentPiece = new Piece();
    }
    this.currentPiece.update();
  }

  holdPiece() {
    if (!this.heldPiece) this.heldPiece = this.currentPiece;
    this.currentPiece = new Piece();
  }

  draw(context: CanvasRenderingContext2D) {
    this.board.draw(context);
    this.currentPiece.draw(context);
  }
}
