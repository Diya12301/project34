//Create variables here
var dog, happydog, database, foodS,foodStock;

function preload()
{
  //load images here
  DogImg = loadImage("images/dogImg.png");
  dog2Img = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500,500);
  
DOG=createSprite();
DOG = addImage("DogImg");

}

foodStock=database.ref('food');
foodStock.on("value",readStock);

if(keyDown(UP_ARROW)){
  writeStock(foodS);
  DOG.addImage("dog2Img");
}

function draw() {
  background(46,139,87)
  DOG.display();
  drawSprites();
  //add styles here

}

function readStock(data){
  foodS.data.val();

}

function writeStock(x){
  database.ref('/').update({
    Food:x  }

  )
}






