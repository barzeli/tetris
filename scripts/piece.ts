import { generateShape, isInsideBorders, randomRange } from "./utils.js";
import { Action, Position, Shape } from "./types.js";
import { GAME_WIDTH } from "./constants.js";
import { Block } from "./block.js";

export class Piece {
  shape: Shape;
  blocks: Block[];
  position: Position;

  constructor() {
    this.shape = generateShape();
    this.position = { x: randomRange(GAME_WIDTH), y: 0 };
    this.blocks = this.shape.squares.map(
      (square) => new Block(this.shape.color, this.position, square)
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
    isInsideBorders(this.position)
      ? this.blocks.forEach((block) => block.update(this.position))
      : (this.position = oldPosition);
  }

  draw(context: CanvasRenderingContext2D) {
    this.blocks.forEach((block) => block.draw(context));
  }
}
