
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bola
var retangulo1, retangulo
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	
	var options = {

	restitution: 1.6
}
	//Crie os Corpos Aqui.
   
	
	bola = Bodies.circle(100,250,90,options)
    World.add(world, bola);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

ellipse(bola.position.x, bola.position.y,60,60)


 