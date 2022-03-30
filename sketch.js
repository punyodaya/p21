
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	ball = Bodies.circle(150,150,40,ball_options);
	Engine.run(engine);
	World.add(world,ball);
	groundObj=new Ground(800,670,1600,20)
	rhs=new Ground(1350,600,20,120)
	lhs=new Ground(1100,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
	rhs.display();
	lhs.display();
  drawSprites();
 ellipse(ball.position.x,ball.position.y,40,40)
}
function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}



