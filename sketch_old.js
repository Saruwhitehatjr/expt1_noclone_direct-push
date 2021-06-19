var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green"
  fixedRect= createSprite(200,200,50,80);
  fixedRect.shapeColor="green"


  gameObj1 =createSprite(100,100,50,50);
  gameObj1.shapeColor ="green";
  gameObj2 =createSprite(200,100,50,50);
  gameObj2.shapeColor ="green"
  gameObj3 =createSprite(300,100,50,50);
  gameObj3.shapeColor ="green"
  gameObj4 =createSprite(400,100,50,50);
  gameObj4.shapeColor ="green"

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  //fixedRect.velocityY = -5;
}

function draw() {
  background(250); 
  movingRect.x=World.mouseX;
 movingRect.y=World.mouseY; 

 if(isTouching(movingRect,gameObj1))
 {
  gameObj1.shapeColor ="yellow";
  movingRect.shapeColor="yellow";
 }
 else{
  gameObj1.shapeColor="green"
  movingRect.shapeColor="green"
 }
 
 bounceOff(movingRect,fixedRect);   
  
  drawSprites();
}
//movingRect.y>=160&&movingRect.y<=240&&

function isTouching(obj1,obj2)
{

//collision
if(obj1.x-obj2.x<obj1.width/2+obj2.width/2&&
  obj2.x-obj1.x<obj1.width/2+obj2.width/2&&
  obj1.y-obj2.y<obj1.height/2+obj2.height/2&&
  obj2.y-obj1.y<obj1.height/2+obj2.height/2)
{
  return true;
}
else{
  return false;

}
}

function bounceOff(obj1,obj2 )
{

  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2) {
      obj1.velocityX = obj1.velocityX * (-1);
      obj2.velocityX = obj2.velocityX * (-1);
}
if (obj1.y - obj2.y < obj2.height/2 + obj1.height/2
  && obj2.y - obj1.y < obj2.height/2 + obj1.height/2){
    obj1.velocityY = obj1.velocityY * (-1);
    obj2.velocityY = obj2.velocityY * (-1);
}
}