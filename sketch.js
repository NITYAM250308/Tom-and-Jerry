const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var catImg,mouseImg;
var catImg2,mouseImg2;
var mouseImg3,CatImg3;
var cat,mouse;
function preload() {
    //load the images here
    catImg=loadImage("cat1.png");
    mouseImg=loadImage("mouse1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    mouseImg2=loadAnimation("mouse2.png","mouse3.png");
    catImg3=loadImage("cat4.png");
    mouseImg3=loadImage("mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;
    //create tom and jerry sprites here
    ground=new Ground(400,400);
    cat=createSprite(680,640);
    cat.addImage(catImg);
    cat.scale=0.2;
    mouse=createSprite(80,620);
    mouse.addImage(mouseImg);
    mouse.scale=0.2;

}

function draw() {

    background(255);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.addAnimation("catcollided",catImg3);
        cat.changeAnimation("catcollided");
        cat.scale=0.2;
        cat.velocityX=0;
        cat.x=210
        cat.y=630
        mouse.addAnimation("mousecollided",mouseImg3);
        mouse.changeAnimation("mousecollided");
        mouse.scale=0.2;
    }

    ground.display();
    cat.display();
    mouse.display();
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
 //For moving and changing animation write code here

 if (keyCode=== LEFT_ARROW){
     cat.addAnimation("catrunning", catImg2);
     cat.changeAnimation("catrunning");
     cat.scale=0.2;
     cat.velocityX=-3;

     mouse.addAnimation("mouseteasing",mouseImg2);
     mouse.changeAnimation("mouseteasing");
     mouse.scale=0.2;
 }


}
