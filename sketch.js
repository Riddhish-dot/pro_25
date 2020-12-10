
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball
var ground
var box1,box2,box3
var dustbin
function preload()
{
	
}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height-50,width,10)
	box1 = new Box(width-300,height-65,100,20)
  box2 = new Box(width-360,height-130,20,150)
  box3 = new Box(width-240,height-130,20,150)
  ball = new Ball(100,305,70)
  dustbin = new Bin(width-300,height-130,150,150)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  ball.display()
  dustbin.display()
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x: 250,y: -250})
  }
}