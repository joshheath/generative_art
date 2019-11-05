var createCanvas, background, width, height, ellipse, phase = 0, speed = 0.02, maxCircleSize = 20, sin, cos;


function setup() {
    "use strict";
    createCanvas(500, 500);
}

function draw() {
    "use strict";

    background(90);
    var x = width / 2;
    var y = height / 2 + sin(phase) * 50;
    phase = frameCount * speed;
    var sizeOffset = (cos(phase) + 1) * 0.5;
    var circleSize = sizeOffset * maxCircleSize;

    ellipse(x, y, 15, 10);

}
