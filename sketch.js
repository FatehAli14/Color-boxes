var canvas;
var music;
var rect1,rect2,rect3,rect4;
var movingRect;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    rect1 = createSprite(700,550,100,100);
    rect1.shapeColor="blue";
   // rect1.debug = true;
    rect2 = createSprite(500,550,100,100);
    rect2.shapeColor="green";
  //  rect2.debug = true;
    rect3 = createSprite(300,550,100,100);
    rect3.shapeColor="white";
   // rect3.debug = true;
    rect4 = createSprite(100,550,100,100);
    rect4.shapeColor="yellow";
   // rect4.debug = true;

    //create box sprite and give velocity
    movingRect = createSprite(400,200,50,50);
    movingRect.shapeColor = "red";
   // movingRect.debug = true;
}

function draw() {
    background(rgb(169,169,169));
    music.play();

    movingRect.x = World.mouseX;
    movingRect.y = World.mouseY;

    //add condition to check if box touching surface and make it box
    if(rect1.isTouching(movingRect) && movingRect.bounceOff(rect1) ){
        rect1.shapeColor = "purple";
        movingRect.shapeColor = "purple";
    }
 
    if(rect2.isTouching(movingRect) && movingRect.bounceOff(rect2) ){
        rect2.shapeColor = "purple";
        movingRect.shapeColor = "purple";
        music.stop();
    }
  
    if(rect3.isTouching(movingRect) && movingRect.bounceOff(rect3) ){
        rect3.shapeColor = "purple";
        movingRect.shapeColor = "purple";
    }

    if(rect4.isTouching(movingRect) && movingRect.bounceOff(rect4) ){
        rect4.shapeColor = "purple";
        movingRect.shapeColor = "purple";
    }
    drawSprites();

}
