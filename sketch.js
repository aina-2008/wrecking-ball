const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var box=[]
var rope,ball,ground;
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ball=new Ball(200,100,40,40)
    
    rope=new Rope(ball.body,{x:300 ,y:50})

    ground = new Ground(400,590,800,20)

   for (var i=0; i<6; i++)//i++ means i=i+1 
{
   box[i]=new Box(680,10,40,40)
   

}
for (var i=6; i<12; i++)//i++ means i=i+1 
{
   box[i]=new Box(600,10,40,40)
   

}
for (var i=12; i<20; i++)//i++ means i=i+1 
{
   box[i]=new Box(520,10,40,40)
   

}

}
function draw(){
    background("blue");
    Engine.update(engine);
    
    ball.display();
    rope.display();
    ground.display();
    for(var i=0; i<6; i++)//i++ means i=i+1
    {
    box[i].display();


}
for(var i=6; i<12; i++)//i++ means i=i+1
    {
    box[i].display();


}

for(var i=12; i<20; i++)//i++ means i=i+1
    {
    box[i].display();


}

}

function mouseDragged() {
Matter.Body.setPosition(ball.body,{x:mouseX ,y:mouseY})


}



