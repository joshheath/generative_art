function setup() {
  createCanvas(1200, 800);
  noLoop();
}

function draw() {
  background('floralwhite');
  var step = 10;

  for(var x = 0; x < 1200; x = x+step){
    for(var y = 0; y < 800; y = y+step){
      drawRandomLine(x,y,step);
      // drawRandomShapes(x,y,step);
    }
  }
}

function drawRandomLine(x,y,step){
  if(random() > 0.5) {
    strokeWeight(step/2);
    stroke('darkblue');
    line(x, y, x, y+step);
  } else {
    strokeWeight(step/4);
    stroke('darkblue');
    line(x, y, x, y)
  }
}
