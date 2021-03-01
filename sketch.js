
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var block, ground;
var block2,block3,block4,block5,block6,player;
var block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var ball,pab;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	background(255);

	engine = Engine.create();
	world = engine.world;

	block = new Block(310,400,30,40);
	block2 = new Block(340,400,30,40);
	block3 = new Block(370,400,30,40);
	block4 = new Block(400,400,30,40);
	block5 = new Block(430,400,30,40);
	block6 = new Block(460,400,30,40);
	block7 = new Block(490,400,30,40);
	block8 = new Block(340,350,30,40);
	block9 = new Block(370,350,30,40);
	block10 = new Block(400,350,30,40);
	block11 = new Block(430,350,30,40);
	block12 = new Block(460,350,30,40);
	block13 = new Block(370,300,30,40);
	block14 = new Block(400,300,30,40);
	block15 = new Block(430,300,30,40);
	block16 = new Block(400,250,30,40);
	player = new Shot(900,300,80,80);
	ground = new Ground(400,450,230,5);
//	block17 = new Pper(900,300,30,40);

  pab = new Chain(player.body,{x:900, y:300});
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  block.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
 // block17.display();
  player.display();
  //ball.display();
  ground.display();
  pab.display();
  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  pab.fly();
}
