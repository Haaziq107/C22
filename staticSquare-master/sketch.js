const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;

var ball1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
var balloptions={
    restitution:0.8
}
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
   ball1=Bodies.circle(200,200,20,balloptions);
   World.add(world,ball1);
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipse(ball1.position.x,ball1.position.y,40,40);
}