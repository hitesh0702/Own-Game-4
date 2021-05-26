const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1,alien,alien_img,laser_img,laser,asteriodGroup,aliengroup;
var player,img,asteriod,asteriod_img,lasergroup,edges,gameState="Start";
var start

function preload(){
  img=loadImage("Spaceship.png");
  alien_img=loadImage("alien.png");
  asteriod_img=loadImage("asteriod.png");
  laser_img=loadImage("laser.svg");
}

function setup(){

    var canvas = createCanvas(1400,700);

   
    
    start=new welocome();
    
    engine = Engine.create();
    world = engine.world;
    edges=createEdgeSprites();
    player=createSprite(300,300,120,100);
    player.addImage(img);

  player.scale=0.2;
  player.velocityY=6;
  asteriodGroup=new Group();
  aliengroup=new Group();
  lasergroup=new Group();
 // player=new spaceship();
}

function draw() {
  
  if(gameState==="Start"){
    
    start.display();
   
    
  }
  
  if (gameState==="Play"){
    background("red");
    
   
  player.bounceOff(edges[2])  
  player.bounceOff(edges[3])  
  console.log(player);
  aliens();
  asteriods();
  if(keyDown("space")){
    lasers();
  }
  if (asteriodGroup.isTouching(lasergroup)){
    asteriodGroup.destroyEach();
    lasergroup.destroyEach();
  }
  if (aliengroup.isTouching(lasergroup)){
    aliengroup.destroyEach();
    lasergroup.destroyEach();
  }
  //player.display();
  if (asteriodGroup.isTouching(player) || aliengroup.isTouching(player)){
    gameState="End";
  }
 drawSprites();
}
else  if (gameState==="End"){
  fill("gold")
  textSize(45);
  text("Game Over ",600,350);
}
}
/*function keyPressed(){
  if(keyCode===UP_ARROW){
    player.y=player.y-40;
  }
  
  if(keyCode===DOWN_ARROW){
    player.y=player.y+40;
  }
}*/
function aliens() {
  if (frameCount%80===0){
alien=createSprite(1220,200,40,40);
alien.addImage(alien_img);
alien.scale=0.1;
alien.y=Math.round(random(10,590));
alien.velocityX=-8;
aliengroup.add(alien);
  }
  
}
function asteriods() {
  if (frameCount%100===0){
asteriod=createSprite(1220,200,40,40);
asteriod.addImage(asteriod_img);
asteriod.scale=0.34;
asteriod.y=Math.round(random(10,590));
asteriod.velocityX=-8;
asteriodGroup.add(asteriod);
  }
  
}
function lasers(){
laser=createSprite(325,300,40,40);
laser.y=player.y;
laser.scale=0.4
laser.velocityX=10;
laser.addImage(laser_img);
lasergroup.add(laser);
}