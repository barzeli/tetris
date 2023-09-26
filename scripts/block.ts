import { BLOCK_SIZE } from "./constants.js";
import { Color, Position } from "./types.js";

export class Block {
  isActive = true;

  constructor(
    public color: Color,
    public relativePosition: Position,
    public position: Position
  ) {}

  update(piecePosition: Position) {
    this.position = {
      x: piecePosition.x + this.relativePosition.x,
      y: piecePosition.y + this.relativePosition.y,
    };
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.color;
    context.strokeStyle = "#000000";
    context.lineWidth = 1 / BLOCK_SIZE;
    context.beginPath();
    context.rect(this.position.x, this.position.y, 1, 1);
    context.fill();
    context.stroke();
  }
}
