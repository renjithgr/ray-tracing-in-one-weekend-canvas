import Ray, { rayColor } from "./ray";
import Vector from "./vector";

const ASPECT_RATIO = 16.0 / 9.0;
const IMAGE_WIDTH = 400;
const IMAGE_HEIGHT = IMAGE_WIDTH / ASPECT_RATIO;

const VIEWPORT_HEIGHT = 2.0;
const VIEWPORT_WIDTH = ASPECT_RATIO * VIEWPORT_HEIGHT;
const FOCAL_LENGTH = 1.0;

const origin = new Vector(0, 0, 0);
const horizontal = new Vector(VIEWPORT_WIDTH, 0, 0);
const vertical = new Vector(0, VIEWPORT_HEIGHT, 0);
const lowerLeftCorner = origin.subtract(horizontal.divide(2)).subtract(vertical.divide(2)).subtract(new Vector(0, 0, FOCAL_LENGTH));

const canvasEl = document.getElementById('canvas') as HTMLCanvasElement;
canvasEl.width = IMAGE_WIDTH;
canvasEl.height = IMAGE_HEIGHT;
const context = canvasEl.getContext('2d') as CanvasRenderingContext2D;

let pixels = [];

for (let j = IMAGE_HEIGHT - 1; j >= 0; --j) {
  for(let i = 0; i < IMAGE_WIDTH; i++) {
    const u = i / (IMAGE_WIDTH - 1);
    const v = j / (IMAGE_HEIGHT - 1);
    const r = new Ray(origin, lowerLeftCorner.add(horizontal.multiply(u)).add(vertical.multiply(v).subtract(origin)));
    const color = rayColor(r);
    pixels.push([color.x, color.y, color.z]);
  }
}

if(context) {
  context.fillStyle = `rgba(0, 0, 0)`;
  context.fillRect(0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
  const imageData = context.getImageData(0, 0, IMAGE_WIDTH, IMAGE_HEIGHT);
  const data = imageData.data;

  for(let i = 0; i < pixels.length; i++) {
    let index = i * 4;
    data[index + 0] = Math.abs(Math.round(pixels[i][0] * 255));
    data[index + 1] = Math.abs(Math.round(pixels[i][1] * 255));
    data[index + 2] = Math.abs(Math.round(pixels[i][2] * 255));
    data[index + 3] = 255;
  }

  context.putImageData(imageData, 0, 0);
}

export {};