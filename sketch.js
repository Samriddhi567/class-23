const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;

  
    box= new Box(200,400,100,150);
    box1= new Box(300,500,40,100);
    box2=new Box(230,200,120,135);
    box3=new Box(320,100,100,140);
    ground= new Ground();
}

function draw(){
    background(0);
    Engine.update(engine);
     
    box.display();
    box1.display();
    box2.display();
    box3.display();
    ground.display();
   
   
}