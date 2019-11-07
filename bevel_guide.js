var createCanvas, background, width, height, ellipse, phase = 0, speed = 0.03, maxCircleSize = 20, sin, cos, frameCount, numRows = 10, sizeOffset, numCols = 10, colorA, colorB, color, noStroke, numStrands = 2;


function setup() {
    // "use strict";
    createCanvas(500, 500);
    noStroke();
    colorA = color(253, 174, 120);
    colorB = color(226, 129, 161);
}

function draw() {
    // "use strict";

    background(4, 58, 74);
    var x = width / 2;
    var y = height / 2 + sin(phase) * 50;
    phase = frameCount * speed;
    var circleSize = sizeOffset * maxCircleSize;

    for ( var strand = 0; strand < numStrands; strand +=1) {
      for (var col = 0; col < numCols; col += 1) {
        for (var row = 0; row < numRows; row += 1) {
          fill(lerpColor(colorA, colorB, row / numRows));
          var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
          var colOffset = map(col, 0, numCols, 0, TWO_PI);
          var x = map(col, 0, numCols, 50, width - 50);
          var y = height / 2 + row * 10 + sin(phase + colOffset) * 50;
          var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
          ellipse(x, y, circleSize, circleSize);
        }
      }
    }
}
