var redCarImg, raceCar;
var raceTrackImg, raceTrack;
var oneCashImg, oneCash, fiveCashImg, fiveCash, tenCashImg, tenCash, twentyCashImg, twentyCash, fiftyCashImg, fiftyCash, hundredCashImg, hundredCash, cashGroup;
var knifeImg, kinfe, knifeGroup;


var gameState=PLAY;

function preload(){
  redCarImg = loadImage("redCar.png");
  raceTrackImg = loadImage("racetrack.png");
  oneCashImg = loadImage("1 dollar.png");
  fiveCashImg = loadImage("5 dollar.png");
  tenCashImg = loadImage("10 dollar.png");
  twentyCashImg = loadImage("20 dollar.png");
  fiftyCashImg = loadImage("50 dollar.png");
  hundredCashImg = loadImage("100 dollar.png")
  knifeImg = loadImage("knife.png")

}

function setup(){

  createCanvas(windowWidth,windowHeight);

  raceTrack=createSprite(width/2,200);
  raceTrack.addImage(raceTrackImg);
  raceTrack.velocityY = 4;

  oneCash=createSprite(width/2,200);
  oneCash.addImage(oneCashImg);
  oneCash.velocityY = 4;

  fiveCash=createSprite(width/2,200);
  fiveCash.addImage(fiveCashImg);
  fiveCash.velocityY = 4;

  tenCash=createSprite(width/2,200);
  tenCash.addImage(tenCashImg);
  tenCash.velocityY = 4;

  twentyCash=createSprite(width/2,200);
  twentyCash.addImage(twentyCashImg);
  twentyCash.velocityY = 4;

  fiftyCash=createSprite(width/2,200);
  fiftyCash.addImage(fiftyCashImg);
  fiftyCash.velocityY = 4;

  hundredCash=createSprite(width/2,200);
  hundredCash.addImage(hundredCashImg);
  hundredCash.velocityY = 4;

  knife=createSprite(width/2,200);
  knife.addImage(knifeImg);
  knife.velocityY = 4;

  cashGroup = new Group();
  knifeGroup = new Group();

  edges = createEdgeSprites();

  redCar = createSprite(40, height - 100)
  redCar.addImage(redCarImg);
}


function draw(){
  background(raceTrackImg);

  
    
    redCar.collide(edges);

    if(keyDown (LEFT_ARROW)){
      redCar.x = redCar.x -6
    }

    if(keyDown (RIGHT_ARROW)){
      redCar.x = redCar.x +6  
    }

 
  drawSprites();

  if(gameState=PLAY){
    background(raceTrackImg);

  
    
    redCar.collide(edges);

    if(keyDown (LEFT_ARROW)){
      redCar.x = redCar.x -6
    }

    if(keyDown (RIGHT_ARROW)){
      redCar.x = redCar.x +6  
    }   
  
    if(raceTrack.y > height ){
     raceTrack.y = height/2;
    }
    
    spawnCash();
  
    if (oneCash.isTouching(redCar)) {
      oneCash.destroyEach();
      pointsCollection=pointseCollection + 1;
    }
    else if (fiveCash.isTouching(redCar)) {
      fiveCash.destroyEach();
      pointsCollection=pointseCollection + 5;
     }
    else if (tenCash.isTouching(redCar)) {
      tenCash.destroyEach();
      pointsCollection=pointseCollection + 10;
    }
    else if (twentyCash.isTouching(redCar)) {
      twentyCash.destroyEach();
      pointsCollection=pointseCollection + 5;
    }
    else if (fiftyCash.isTouching(redCar)) {
      fiftyCash.destroyEach();
      pointsCollection=pointseCollection + 50;
    }
    else if (hundredCash.isTouching(redCar)) {
      hundredCash.destroyEach();
      pointsCollection=pointseCollection + 100;
    }    
    else if (knife.isTouching(redCar)) {
     gameState = END;
    }    
    if(gameState===END){
      cashGroup.destroyEach();

          

    }
       

      
      
      

    drawSprites();
    textSize(20);
    fill(255);
    text("Points :"+ pointsCollection,width-150,30);
  }
  

}

function spawnCash() {
  if (World.frameCount % 410 == 0) {
  var cash = createSprite(Math.round(random(50, width-50),40, 10, 10));
  cash.addImage(oneCash, fiveCash, tenCash, twentyCash, fiftyCashImg, hundredCashImg);
  cash.scale=0.13;
  cash.velocityY = 5;
  cash.lifetime = 200;
  cashGroup.add(oneCashImg, fiveCashImg, tenCashImg, twentyCashImg, fiftyCashImg, hundredCashImg);
  }
}


function spawnKnife() {
  if (World.frameCount % 410 == 0) {
  var knife = createSprite(Math.round(random(50, width-50),40, 10, 10));
  knife.addImage(knifeImg);
  knife.scale=0.13;
  knife.velocityY = 5;
  knife.lifetime = 200;
  knifeGroup.add(knifeImg);
  }
}