const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;

var ball1,ball2,ball3,ball4,ball5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

 
	engine = Engine.create();
  world = engine.world;
    
  Engine.run(engine);
  
  ball1 = new Cradle(400,400,20);
  ball2 = new Cradle(380,400,20);
  
  
  roof = new Roof(100,100,200,10);
  	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ball1.display();
  ball2.display();
  roof.display();
  
  drawSprites();
 
}



