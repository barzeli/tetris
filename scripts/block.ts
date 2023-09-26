import { BLOCK_SIZE } from "./constants.js";
import { Color, Position } from "./types.js";

export class Block {
  isActive = true;

  constructor(
    public color: Color,
    public piecePosition: Position,
    public relativePosition: Position
  ) {}

  update(piecePosition: Position) {
    this.piecePosition = piecePosition;
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.color;
    context.strokeStyle = "#000000";
    context.lineWidth = 1 / BLOCK_SIZE;
    context.beginPath();
    context.rect(
      this.piecePosition.x + this.relativePosition.x,
      this.piecePosition.y + this.relativePosition.y,
      1,
      1
    );
    context.fill();
    context.stroke();
  }
}
