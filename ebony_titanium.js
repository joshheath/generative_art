var n = 0;

var c = 8;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);
}

function draw() {
  var a = n*1000.5;
  var r = c*sqrt(n);
  var x = r*cos(a) + width/2;
  var y = r*sin(a) + height/2;
  fill((a-r)%256, 255, 255);
  noStroke();
  arc(x,y,50 ,50, PI, TWO_PI);
  n++;

}
