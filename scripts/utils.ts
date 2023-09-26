import { Block } from "./block.js";
import { GAME_HEIGHT, GAME_WIDTH } from "./constants.js";
import { Piece } from "./piece.js";
import { Position, SHAPES } from "./types.js";

export const generateShape = () => SHAPES[randomRange(SHAPES.length)];

export const randomRange = (range: number) => Math.floor(Math.random() * range);

export const isInsideBorders = (position: Position, blocks: Block[]) =>
  blocks.every(
    (block) =>
      position.x + block.relativePosition.x >= 0 &&
      position.x + block.relativePosition.x < GAME_WIDTH &&
      position.y + block.relativePosition.y >= 0 &&
      position.y + block.relativePosition.y < GAME_HEIGHT
  );

export const isEndOfFall = (piece: Piece) =>
  piece.shape.squares.some(
    (square) => piece.position.y + square.y >= GAME_HEIGHT - 1
  );
