
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
	dustbin1 = new Dustbin(400, 650, 200, 20)
	dustbin2 = new Dustbin(300, 610, 20, 100)
	dustbin3 = new Dustbin(500, 610, 20, 100)

	ground = new Ground(400, 680, 800, 20)

	paper=new Paper(20, 650, 40)
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:350, y:-175})
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  ground.display()
  paper.display()
  drawSprites();
 
}



