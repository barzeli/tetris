export type Action = "moveLeft" | "moveRight" | "moveDown" | "rotate" | "hold";

export enum Color {
  ORANGE = "#f7a700",
  RED = "#dc0000",
  BLUE = "#0064c8",
  LIGHT_BLUE = "#00c9df",
  GREEN = "#00e632",
  YELLOW = "#ffef2b",
  PURPLE = "#9b00be",
}

export enum ShapeType {
  O = "O",
  I = "I",
  L = "L",
  J = "J",
  Z = "Z",
  T = "T",
  S = "S",
}

export interface Position {
  x: number;
  y: number;
}

export interface Shape {
  type: ShapeType;
  color: Color;
  squares: Position[];
  rotationCenter: Position;
}

export const SHAPES: Shape[] = [
  {
    type: ShapeType.O,
    color: Color.YELLOW,
    squares: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ],
    rotationCenter: {
      x: 0.5,
      y: 0.5,
    },
  },
  {
    type: ShapeType.L,
    color: Color.ORANGE,
    squares: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 1, y: 2 },
    ],
    rotationCenter: {
      x: 0,
      y: 1,
    },
  },
  {
    type: ShapeType.J,
    color: Color.BLUE,
    squares: [
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: 2 },
      { x: 0, y: 2 },
    ],
    rotationCenter: {
      x: 1,
      y: 1,
    },
  },
  {
    type: ShapeType.I,
    color: Color.LIGHT_BLUE,
    squares: [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
      { x: 0, y: 2 },
      { x: 0, y: 3 },
    ],
    rotationCenter: {
      x: 0.5,
      y: 1.5,
    },
  },
  {
    type: ShapeType.T,
    color: Color.PURPLE,
    squares: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
      { x: 1, y: 1 },
    ],
    rotationCenter: {
      x: 1,
      y: 0,
    },
  },
  {
    type: ShapeType.Z,
    color: Color.RED,
    squares: [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 1, y: 0 },
      { x: 2, y: 0 },
    ],
    rotationCenter: {
      x: 1,
      y: 1,
    },
  },
  {
    type: ShapeType.S,
    color: Color.GREEN,
    squares: [
      { x: 0, y: 0 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 2, y: 1 },
    ],
    rotationCenter: {
      x: 1,
      y: 1,
    },
  },
];
