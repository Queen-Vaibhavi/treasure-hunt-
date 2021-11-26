var bg,bg2,form,system,code,security;
var score=0;
var audio,aladdinImg,aladdin;

function preload() {
  bg = loadImage("aladdin_cave2.jpg");
  bg2 = loadImage("treasure.jpg")
  audio = loadSound("mixkit-classroom-spontaneous-applause-500.wav");
  aladdinImg = loadImage("aladdin.png");
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);


  var aladdin = createSprite(600,300,50,50);
  aladdin.addImage(aladdinImg);
  aladdin.scale = 0.5;
  aladdin.visible = false;
  
  if(score === 3) {
    clear()
    background(bg2)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",250, 200);
    aladdin.visible = true;
  }

  drawSprites()
}