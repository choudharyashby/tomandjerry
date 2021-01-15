function preload() {
    //load the images here
    jungle.loadImage("garden.png");
    mouseImg.loadAnimation("jerryOne.png","jerryTwo.png","jerryThree.png","jerryFour.png");
    catImg.loadAnimation("tomOne.png","tomTwo.png","tomThree.png","tomFour.png");
}

function setup(){
    createCanvas(400,400);
    //create tom and jerry sprites here
    background = createSprite(400,400);
    background.addImage(jungle);

    cat = createSprite(200,200,50,50);
    cat.addAnimation(catImg);

    mouse = createSprite(60,362,100,100);
    mouse.addAnimation(mouseImg);

    
}

function draw() {

    background("white");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/width)
    {
       
        cat.addAnimation("catLastImage",catImg3);
        cat.changeAnimation("catLastImage");
            cat.velocityX = 0;
    }
    
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    if(leftcode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");
    }
    text(mouseX + ','+ mouseY,10,45);
}
