var createCanvas, background, width, height, ellipse, phase = 0, speed = 0.03, maxCircleSize = 20, sin, cos, frameCount, numRows = 10, sizeOffset, numCols = 10;


function setup() {
    "use strict";
    createCanvas(500, 500);
}

function draw() {
    "use strict";

    background(0);
    var x = width / 2;
    var y = height / 2 + sin(phase) * 50;
    phase = frameCount * speed;
    var circleSize = sizeOffset * maxCircleSize;

    for (var col = 0; col < numCols; col +=1) {
      for (var row = 0; row < numRows; row += 1) {
        var y = height/2 + row * 10 + sin(phase) * 50;
        var sizeOffset = (cos(phase - row / numRows) + 1) * 0.5;
        ellipse(x, y, circleSize, circleSize);
      }
    }
}
