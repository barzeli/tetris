import { generateShape, isInsideBorders, randomRange } from "./utils.js";
import { Action, Position, Shape } from "./types.js";
import { BLOCK_SIZE, GAME_WIDTH } from "./constants.js";

export class Piece {
  shape: Shape;
  position: Position;

  constructor() {
    this.shape = generateShape();
    this.position = { x: randomRange(GAME_WIDTH), y: 0 };
  }

  update(direction: Action = "moveDown") {
    const oldPosition = this.position;
    switch (direction) {
      case "rotate":
        break;
      case "moveLeft":
        this.position = { ...this.position, x: this.position.x - 1 };
        break;
      case "moveRight":
        this.position = { ...this.position, x: this.position.x + 1 };
        break;
      case "moveDown":
        this.position = { ...this.position, y: this.position.y + 1 };
        break;
      default:
        break;
    }
    !isInsideBorders(this.position) && (this.position = oldPosition);
  }

  draw(context: CanvasRenderingContext2D) {
    context.fillStyle = this.shape.color;
    context.strokeStyle = "#000000";
    context.lineWidth = 1 / BLOCK_SIZE;
    context.save();
    context.translate(this.position.x, this.position.y);
    this.shape.blocks.forEach((block) => {
      context.beginPath();
      context.rect(block.x, block.y, 1, 1);
      context.fill();
      context.stroke();
    });
    context.restore();
  }
}
