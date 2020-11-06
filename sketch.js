function setup() {
  createCanvas(480,800);
  createSprite(400, 200, 50, 50);

  ground = new Ground(width/2,790,480,10)
}
var particles =[];
var plinkos =[];
var divisions =[];

var divisionHeight = 300;

function draw() {
  background(255,255,255);  
  
  for (var k = 0; k<=width;k = k+80){
    divisions.push(new divisions(k,heigt - divisionHeight/2,10,divisionHeight))
  }
  for (var j = 0; j<=width;j = j+50){
   plinkos.push(new plinko(j,75))
  }
  for (var j = 0; j<=width;j = j+50){
    plinkos.push(new plinko(j,150))
   }
   for (var j = 0; j<=width;j = j+50){
    plinkos.push(new plinko(j,225))
   }
   for (var j = 0; j<=width;j = j+50){
    plinkos.push(new plinko(j,300))

    for (var j = 0; j<=width;j = j+50){
      partikles.push(new particle(j,600))
   }
  ground.display();
  drawSprites();
}