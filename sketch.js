let o;
let bgPic;
function setup() {
  createCanvas(600, 400);
  o = new Ostrich(100,255,50,50);
  //make sure you have this image in your directory.
  bgPic = loadImage("images/background.png")
}

function draw() {
  background(bgPic);
  o.display();
  o.update();
}
