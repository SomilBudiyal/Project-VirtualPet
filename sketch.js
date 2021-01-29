var database;

var dog,happyDog;

var food,foodStock;

function preload(){

var dogImage = loadImage("dogImg.png");
var happyDogImg = loadImage("happydog.png");

}

function setup() {
  createCanvas(500,500);
  
  dogSprite=createSprite(250,250,50,50);
  dogSprite.addImage(dogImage);                         
  dogSprite.scale = 0.1;

}


function draw() {  

  drawSprites();
  //add styles here

}



