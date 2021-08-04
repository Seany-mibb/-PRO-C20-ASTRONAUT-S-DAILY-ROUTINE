var bath, bathImg;
var brush, brushImg;
var drink, drinkImg;
var eat, eatImg;
var gym, gymImg;
var move, moveImg;
var sleep, sleepImg;
var spaceship, spaceshipImg;
var astronaunt;
var edges;


function preload()
{
  bathImg = loadAnimation("bath1.png", "bath2.png");
  brushImg = loadImage("brush.png");
  drinkImg = loadAnimation("drink1.png", "drink2.png");
  eatImg = loadAnimation("eat1.png", "eat2.png");
  gymImg = loadAnimation("gym11.png", "gym12.png");
  sleepImg = loadImage("sleep.png");
  spaceshipImg = loadImage("iss.png");
}

function setup()
{
  createCanvas(800,400);
  
  edges = createEdgeSprites();

  spaceship = createSprite(400,200);
  spaceship.addImage("spaceship", spaceshipImg);
  spaceship.scale = 0.2;

  astronaunt = createSprite(200,200);
  astronaunt.scale = 0.08;
  //astronaunt.bounceOff(edges);
  astronaunt.addImage("sleep boi", sleepImg);
  astronaunt.velocityX = 2;
  astronaunt.velocityY = 2;
  astronaunt.setCollider("rectangle",0,0,1200,2300);
  astronaunt.debug = true;

 


}

function draw() 
{
  background(255,255,255);  
  astronaunt.bounceOff(edges);

  drawSprites();

  textSize(15);
  fill("white");
  text("Up arrow = Eating", 10,20);

  fill("white");
  text("Down arrow = Excersizing", 10,40);

  fill("white");
  text("Left arrow = drinking", 10,60);

  fill("white");
  text("Right arrow = Washing", 10,80);

  fill("white");
  text("m arrow = changing speed and direction", 10,396);

  astronaunt.rotation += 0.5;


  if(keyDown("left_arrow"))
  {
    astronaunt.addAnimation("bah bah bah!!!", drinkImg);
    astronaunt.changeAnimation("bah bah bah!!!");
    astronaunt.setCollider("rectangle",0,0,1000,2500);
    textSize(15);
    fill("yellow");
    text("Left arrow = drinking", 10,60);
  }  

  if(keyDown("right_arrow"))
  {
    astronaunt.addAnimation("oof", bathImg);
    astronaunt.changeAnimation("oof");
    astronaunt.setCollider("rectangle",0,0,1000,2500);
    textSize(15);
    fill("yellow");
    text("Right arrow = Washing", 10,80);
  } 
  
  if(keyDown("up_arrow"))
  {
    astronaunt.addAnimation("BRUH", eatImg);
    astronaunt.changeAnimation("BRUH");
    astronaunt.setCollider("rectangle",0,0,1300,2200);
    textSize(15);
    fill("yellow");
    text("Up arrow = Eating", 10,20);
  }

  if(keyDown("down_arrow"))
  {
    astronaunt.addAnimation("cool", gymImg);
    astronaunt.changeAnimation("cool");
    astronaunt.setCollider("rectangle",0,0,1900,2000);
    textSize(15);
    fill("yellow");
    text("Down arrow = Excersizing", 10,40);

  }

  if(keyDown("m"))
  {
    astronaunt.velocityX = Math.round(random(-2,2));
    astronaunt.velocityY = Math.round(random(-2,2));
    textSize(15);
    fill("yellow");
    text("m arrow = changing speed and direction", 10,396);
    

    if(astronaunt.velocityX === 0 && astronaunt.velocityY === 0)
    {
      astronaunt.velocityX = -2;
      astronaunt.velocityY = 2;
    }
  }

















}