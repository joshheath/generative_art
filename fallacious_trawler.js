function setup() {
  createCanvas(1200, 800);
  noLoop();
}

function draw() {
  background('MEDIUMTURQUOISE');
  var step = 10;

  for (var x = 0; x < 1200; x = x + step) {
    for (var y = 0; y < 800; y = y + step) {
      drawRandomLine(x, y, step);
    }
  }
}

function drawRandomLine(x, y, step) {
  if (random() > 0.5) {
    strokeWeight(step / 4);
    line(x, y, x + step, y + step);

  } else {
    strokeWeight(step / 4);
    line(x + step, y, x, y + step)
  }
}
