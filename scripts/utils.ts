import { GAME_HEIGHT, GAME_WIDTH } from "./constants.js";
import { Piece } from "./piece.js";
import { Position, SHAPES } from "./types.js";

export const generateShape = () => SHAPES[randomRange(SHAPES.length)];

export const randomRange = (range: number) => Math.floor(Math.random() * range);

export const isInsideBorders = (position: Position) =>
  position.x >= 0 &&
  position.x < GAME_WIDTH &&
  position.y >= 0 &&
  position.y < GAME_HEIGHT;

export const isEndOfFall = (piece: Piece) =>
  piece.shape.blocks.some(
    (block) => piece.position.y + block.y >= GAME_HEIGHT - 1
  );
