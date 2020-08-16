var mr,fr;
function setup() {
  createCanvas(800,400);
  mr=createSprite(400, 200, 50, 50);
  fr=createSprite(200,200,50,50);
  mr.shapeColor="green";
  fr.shapeColor="green";
}

function draw() {
  background("black");  
  mr.x=World.mouseX;
  mr.y=World.mouseY;
  drawSprites();
}