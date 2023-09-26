import { Board } from "./board.js";
import {
  BLOCK_SIZE,
  BOARD_MARGIN,
  BOARD_HEIGHT,
  BOARD_WIDTH,
} from "./constants.js";
import { Piece } from "./piece.js";
import { Shape } from "./types.js";
import { generateShape, isEndOfFall } from "./utils.js";

export class Game {
  board = new Board(BOARD_WIDTH, BOARD_HEIGHT);
  currentPiece = new Piece();
  heldPiece: Shape | null = null;
  nextPiece: Shape = generateShape();

  update() {
    if (isEndOfFall(this.currentPiece)) {
      this.board.addPiece(this.currentPiece);
      this.currentPiece = new Piece();
    }
    this.currentPiece.update();
  }

  holdPiece() {
    const heldPiece = this.heldPiece;
    this.heldPiece = this.currentPiece.shape;
    this.currentPiece = heldPiece ? new Piece(heldPiece) : new Piece();
  }

  draw(context: CanvasRenderingContext2D, canvasWidth: number) {
    const boardXMargin = canvasWidth / 2 - (BOARD_WIDTH / 2) * BLOCK_SIZE;
    const squareDimention = 4 * BLOCK_SIZE;
    const heldSquareXMargin = boardXMargin / 2 - squareDimention / 2;
    const nextSquareXMargin =
      canvasWidth - boardXMargin / 2 - squareDimention / 2;
    const squaresYMargin = BOARD_MARGIN + BLOCK_SIZE;
    context.save();
    context.translate(boardXMargin, BOARD_MARGIN);
    context.scale(BLOCK_SIZE, BLOCK_SIZE);
    this.board.draw(context);
    this.currentPiece.draw(context);
    context.restore();

    context.fillStyle = "#646464";
    context.font = "30px sans-serif";
    context.textAlign = "center";
    context.textBaseline = "top";
    context.fillText("HELD", boardXMargin / 2, BOARD_MARGIN - 1);
    context.fillText("NEXT", canvasWidth - boardXMargin / 2, BOARD_MARGIN - 1);
    context.fillStyle = "#ffffff";
    context.strokeStyle = "#000000";
    context.lineWidth = 4;
    context.beginPath();
    context.rect(
      heldSquareXMargin,
      squaresYMargin,
      squareDimention,
      squareDimention
    );
    context.rect(
      nextSquareXMargin,
      squaresYMargin,
      squareDimention,
      squareDimention
    );
    context.stroke();
    context.fill();
  }
}
