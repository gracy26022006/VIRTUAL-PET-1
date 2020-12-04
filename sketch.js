//Create variables here
var dog ;
var dogImg ;
var happyDog ;
var database ;
var foodS ;
var foodStock ;

function preload()
{
  //load images here
  dogImg = loadImage("image/dogImg.png") ;

  happyDog = loadImage("image/dogImg1.png") ;
}

function setup() {
	createCanvas(500,500);
  
  dog.addImage(dogImg);

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
   background(46,139,87);
  drawSprites();
  //add styles here

}

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}


