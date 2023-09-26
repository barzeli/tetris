import { generateShape, isInsideBorders, randomRange } from "./utils.js";
import { Action, Position, Shape } from "./types.js";
import { BOARD_WIDTH } from "./constants.js";
import { Block } from "./block.js";

export class Piece {
  shape: Shape;
  blocks: Block[];
  position: Position;

  constructor(shape?: Shape) {
    this.shape = shape ?? generateShape();
    this.position = { x: randomRange(BOARD_WIDTH), y: 0 };
    this.blocks = this.shape.squares.map(
      (square) =>
        new Block(this.shape.color, square, {
          x: this.position.x + square.x,
          y: this.position.y + square.y,
        })
    );
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
    isInsideBorders(this.position, this.blocks)
      ? this.blocks.forEach((block) => block.update(this.position))
      : (this.position = oldPosition);
  }

  draw(context: CanvasRenderingContext2D) {
    this.blocks.forEach((block) => block.draw(context));
  }
}
