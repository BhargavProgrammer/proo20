var backgroundImage, cat1Image, cat2Image, mouse1Image, mouse2Image, cat3Image, mouse3Image;
var cat, mouse;

function preload() {
    //load the images here
    backgroundImage = loadImage("images/garden.png");
    cat1Image = loadImage("images/cat1.png");
    cat2Image = loadAnimation("images/cat2.png","images/cat3.png");
    cat3Image = loadImage("images/cat4.png");
    mouse1Image= loadImage("images/mouse1.png");
    mouse2Image = loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse3Image = loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
    //create tom and jerry sprites here
    cat = createSprite(800,650,10,10);
    cat.addImage(cat1Image)
    cat.scale=0.18

    mouse = createSprite(100,650,10,10);
    mouse.addImage(mouse1Image)    
    mouse.scale=0.1
}

function draw() {

    background(backgroundImage)
    //Write condition here to evalute if tom and jerry collide
  if(cat.x < mouse.x + 70 ){
    mouse.addAnimation("happy",mouse3Image);
    mouse.changeAnimation("happy");
    cat.addAnimation("standing",cat3Image);
    cat.changeAnimation("standing")
    cat.velocityX=0
  }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouse1",mouse2Image);
    mouse.changeAnimation("mouse1");
    mouse.frameDelay=15
  }

  if(keyCode === LEFT_ARROW){
    cat.addAnimation("running",cat2Image);
    cat.changeAnimation("running")
    cat.frameDelay=5
    cat.velocityX=-8;
  }


}
