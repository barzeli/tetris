import { Game } from "./game.js";
import { BLOCK_SIZE, BOARD_MARGIN, UPDATE_RATE } from "./constants.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const context = canvas.getContext("2d")!;

const game = new Game();

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowDown":
      game.currentPiece.update("moveDown");
      break;
    case "ArrowUp":
      game.currentPiece.update("rotate");
      break;
    case "ArrowLeft":
      game.currentPiece.update("moveLeft");
      break;
    case "ArrowRight":
      game.currentPiece.update("moveRight");
      break;
    case "C":
      game.holdPiece();
      break;
    default:
      break;
  }
});

canvas.width = window.outerWidth;
canvas.height = window.outerHeight;

let cycleStartTime = 0;
const animate = (time?: number) => {
  if (time && time - cycleStartTime > UPDATE_RATE) {
    cycleStartTime = time;
    game.update();
  }

  context.save();
  context.translate(BOARD_MARGIN, BOARD_MARGIN);
  context.scale(BLOCK_SIZE, BLOCK_SIZE);
  game.draw(context);
  context.restore();

  requestAnimationFrame(animate);
};

animate();
