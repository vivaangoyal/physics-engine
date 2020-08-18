var wall,car;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car= createSprite(50,200,40,40);
  wall = createSprite(1500,200,60,height/2);
}

function draw() {
  background("black");
  car.velocityX = speed;
  car.collide(wall);
  if(wall.x-car.x <(car.width+wall.width/2))
  {
    car.velocityX = 0;    
    var deformation = 0.5*weight*speed*speed/22509
    if(deformation>180){
      car.shapeColor = "red";

    }
    if(deformation>100 && deformation<180){
     car.shapeColor = "yellow";

    }
    if(deformation<100 ){
     car.shapeColor = "green";

    }
    
  }
  drawSprites();
}