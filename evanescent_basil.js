function setup() {
  createCanvas(800, 400);

  lineColour = color('navy');
  lineWidth = 4;
}

function draw() {
  background('silver');

  // cube
  noFill();
  stroke(lineColour);
  strokeWeight(lineWidth);
  strokeJoin(ROUND);

  quad(52, 162,
    126, 198,
    126, 328,
    52, 290);
  quad(52, 162,
    176, 144,
    248, 182,
    126, 198);
  quad(126, 198,
    248, 182,
    248, 310,
    126, 328);
  quad(176, 144,
    248, 182,
    248, 310,
    176, 272);
  quad(52, 290,
    176, 272,
    248, 310,
    126, 328);

  // triangle
  noFill();
  stroke(lineColour);
  strokeWeight(lineWidth);
  strokeJoin(ROUND);
  triangle(408, 126,
           458, 344,
           310, 322);
  triangle(408, 126,
           496, 302,
           366, 292);
  quad(366, 292,
       496, 302,
       458, 344,
       310, 322);

  // third shape
  noFill();
  stroke(lineColour);
  strokeWeight(lineWidth);
  strokeJoin(ROUND);
  quad(620, 148,
       668, 122,
       586, 234,
       540, 264);
  quad(620, 148,
       668, 122,
       746, 328,
       698, 356);
  quad(540, 264,
       586, 234,
       746, 328,
       698, 356);

}
