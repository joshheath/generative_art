var createCanvas, background, width, height, ellipse, phase, speed, maxCircleSize, sin, cos, frameCount, numRows, sizeOffset, numCols, colorA, colorB, color, noStroke, numStrands;


function setup() {
    "use strict";
    createCanvas(500, 500);
    noStroke();

    phase = 0
    // determines the speed each circle moves through a full iteration of size change from small to large to small
    speed = 0.03;
    // the largest diameter (in pixels) the circle with reach
    maxCircleSize = 20;
    numRows = 10;
    numCols = 16;
    numStrands = 2;

    colorA = color(30, 136, 229);
    colorB = color(226, 129, 161);
}

// draw runs over and over, allowing animation
function draw() {
    "use strict";

    background(4, 58, 74);
    // frameCount counts frames over time, so it can be used to show change over time and therefore animation
    phase = frameCount * speed;

    for (var strand = 0; strand < numStrands; strand +=1) {
      var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);

      for (var col = 0; col < numCols; col += 1) {
        var colOffset = map(col, 0, numCols, 0, TWO_PI);
        // x and y variables determine the location and dimensions of the circle
        var x = map(col, 0, numCols, 50, width - 50);

        for (var row = 0; row < numRows; row += 1) {
          var y = height / 2 + row * 10 + sin(strandPhase + colOffset) * 50;
          // gives a cosine wave between 0 and 1 rather than -1 and 1
          var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;

          // create a cosine of 20 moving between 0 and 1
          var circleSize = sizeOffset * maxCircleSize;

          fill(lerpColor(colorA, colorB, row / numRows));
          ellipse(x, y, circleSize, circleSize);
        }
      }
    }
}
