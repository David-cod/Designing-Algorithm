var movingRectangle,fixedRectangle;
function setup() {
  createCanvas(1200,1200);
  movingRectangle=createSprite(600,200,100,30);
  movingRectangle.shapeColor="green";

  fixedRectangle=createSprite(400,200,30,100);
  fixedRectangle.shapeColor="green";
  /*fixedRectangle1=createSprite(260,200,50,100);
  fixedRectangle2=createSprite(320,200,50,100);
  fixedRectangle3=createSprite(380,200,50,100);
  fixedRectangle4=createSprite(440,200,50,100);*/

}

function draw() {
  background(0);  
  movingRectangle.x=World.mouseX;
  movingRectangle.y=World.mouseY;
  if(movingRectangle.x-fixedRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    && fixedRectangle.x-movingRectangle.x<fixedRectangle.width/2+movingRectangle.width/2
    && movingRectangle.y-fixedRectangle.y<fixedRectangle.width/2+movingRectangle.width/2
    && fixedRectangle.y-movingRectangle.y<fixedRectangle.width/2+movingRectangle.width/2){
    fixedRectangle.shapeColor="red";
    movingRectangle.shapeColor="red";
    


  } else{
    fixedRectangle.shapeColor="green";
    movingRectangle.shapeColor="green";


  }
  


  drawSprites();
}