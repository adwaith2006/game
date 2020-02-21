var fixedRect,movingRect;
var gameObject1,gameObject2,gameOject3;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400,400,50,50);
  fixedRect.shapeColor="green";
  movingRect=createSprite(600,400,80,50);
  movingRect.shapeColor="green";
  gameObject1=createSprite(100,200,50,50);
  gameObject1.shapeColor="blue";
  gameObject2=createSprite(200,200,50,50);
  gameObject2.shapeColor="white";
  gameObject3=createSprite(300,200,50,50);
  gameObject3.shapeColor="yellow";
  fixedRect.debug=true;
  movingRect.debug=true;
}

function draw() {
  background(0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 if( isTouching(movingRect,gameObject3)){
  gameObject3.shapeColor="red";
  movingRect.shapeColor="red";
 }
 else{
  gameObject3.shapeColor="pink";
  movingRect.shapeColor="pink";
 }
  
  drawSprites();
}
function isTouching(object1,object2){
  if(object1.x-object2.x <object1.width/2+object2.width/2&&
    object2.x-object1.x <object2.width/2+object1.width/2&&
    object1.y-object2.y<object1.height/2+object2.height/2&&
    object2.y-object1.y<object2.height/2+object1.height/2)
  {
    return true;
  }
  else{
   return false;
  }
}