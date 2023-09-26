import { BLOCK_SIZE } from "./constants.js";
import { Piece } from "./piece.js";
import { Position } from "./types.js";

export class Board {
  blocksMatrix: (Position | null)[][];
  constructor(private width: number, private height: number) {
    this.blocksMatrix = [...new Array(height)].fill(
      new Array(width).fill(null)
    );
  }

  addPiece(piece: Piece) {
    piece.shape.squares.forEach(
      (square) =>
        this.blocksMatrix[piece.position.x + square.x][
          piece.position.y + square.y
        ]
    );
  }

  update() {}

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = "#ffffff";
    context.strokeStyle = "#000000";
    context.lineWidth = 4 / BLOCK_SIZE;
    context.rect(0, 0, this.width, this.height);
    context.stroke();
    context.fill();
    context.strokeStyle = "#c8c8c8";
    context.lineWidth = 1 / BLOCK_SIZE;
    [...Array(this.width - 1)]
      .map((_, index) => index + 1)
      .forEach((index) => {
        context.beginPath();
        context.moveTo(index, 0);
        context.lineTo(index, this.height);
        context.stroke();
      });
    [...Array(this.height - 1)]
      .map((_, index) => index + 1)
      .forEach((index) => {
        context.beginPath();
        context.moveTo(0, index);
        context.lineTo(this.width, index);
        context.stroke();
      });
  }
}
