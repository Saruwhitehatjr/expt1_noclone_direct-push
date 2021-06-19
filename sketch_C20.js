var fixedRect,movingRect,fixedRect1;
function setup()
{   createCanvas(1200,800)
    fixedRect=createSprite(600,400,50,80);
    fixedRect.shapeColor="green"

    fixedRect1=createSprite(500,400,50,80);
    fixedRect1.shapeColor="green"

    movingRect=createSprite(400,200,80,30);
    movingRect.shapeColor="green"
}

function draw()
{
    background(0,0,0)
   movingRect.x=mouseX;
   movingRect.y=mouseY;

   


   if(isTouching(movingRect,fixedRect))
   {
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
   } 
   else if(isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor="blue";
    fixedRect1.shapeColor="blue";

   }
   else{

    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
    fixedRect1.shapeColor="green";

   }
   drawSprites();

}

