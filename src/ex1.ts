const IMAGE_WIDTH = 255;
const IMAGE_HEIGHT = 255;

const canvasEl = document.getElementById('canvas') as HTMLCanvasElement;
canvasEl.width = IMAGE_WIDTH;
canvasEl.height = IMAGE_HEIGHT;
const context = canvasEl.getContext('2d') as CanvasRenderingContext2D;

let pixels = [];

for (let j = IMAGE_HEIGHT - 1; j >= 0; --j) {
  for(let i = 0; i < IMAGE_WIDTH; i++) {
    const red = i / IMAGE_WIDTH;
    const green = j / IMAGE_HEIGHT;
    const blue = 0.2;
    pixels.push([red, green, blue]);
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