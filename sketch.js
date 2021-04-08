const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var box1, box2 ,box3 ,box4 ,box5,box6, box7 ,box8 ,box9 ,box10, ground, arm1, arm2;
var ball;
var rope;

function setup() {
  
  var canvas = createCanvas(1200,400);
  
  engine = Engine.create();
  world = engine.world;

  box1 = new BOX(460, 380, 20, 140);
  box2 = new BOX(460, 320, 70, 70);
  box3 = new BOX(460, 320, 150, 50); 
  box4 = new BOX(560, 380, 10, 190);
  box5 = new BOX(610, 380, 50, 200);
  box6 = new BOX(460, 380, 20, 140);
  box7 = new BOX(460, 320, 70, 70);
  box8 = new BOX(460, 320, 150, 50); 
  box9 = new BOX(710, 100, 150, 10);
  box10 = new BOX(710, 380, 50, 200);

  ball = new BIRD(350, 150);

  ground = new GROUND(600, height, 1200, 20);

  arm1 = new GROUND(100, 305, 20, 300);
  arm2 = new GROUND(200, 150, 300, 20);

  rope = new SlingShot(ball.body, {x: 350, y: 150});

} 

function mouseDragged() {


  Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});

}

function draw() {

  background(255);
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  ball.display();

  ground.display();

  arm1.display();
  arm2.display();

  rope.display();

}