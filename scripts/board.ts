import { BLOCK_SIZE } from "./constants.js";
import { Piece } from "./piece.js";
import { Block } from "./block.js";

export class Board {
  blocksMatrix: (Block | null)[][];
  constructor(private width: number, private height: number) {
    this.blocksMatrix = [...new Array(height)].map((_) =>
      new Array(width).map((_) => null)
    );
  }

  addPiece(piece: Piece) {
    piece.blocks.forEach(
      (block) => (this.blocksMatrix[block.position.y][block.position.x] = block)
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

    this.blocksMatrix.forEach((row) =>
      row.forEach((block) => block?.draw(context))
    );
  }
}
