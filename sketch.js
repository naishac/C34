const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2;
var ball;
var slingshot;


function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(950,200,80, 80);
    box2 = new Box(1000,200,80,80);

    ball = new Ball(320, 300, 55);

    ground = new Ground(600,height,1200,20);

    slingshot = new Slingshot(ball.body, { x : 120, y : 120});
}

function draw(){

    background("red");
    
    Engine.update(engine);

    ground.display();

    box1.display();
    box2.display();

    ball.display();

    slingshot.display();
}

function mouseDragged(){

    Matter.Body.setPosition(ball.body,{x : mouseX, y : mouseY});


}