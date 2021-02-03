const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stone
var ground1
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
var box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25;
var slingShot,backgroundImg;

function preload() {
    getBackgroundImg();

}
function setup(){
    var canvas = createCanvas(1200,400);
    myengine = Engine.create();
    myworld = myengine.world;
    
    groundb = new Ground(0,400,5000,30);
    ground1 = new Ground(390,310,270,12);
    ground2 = new Ground(800,225,210,12);
    
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
	box3 = new Box(360,275,30,40);
	box4 = new Box(390,275,30,40);
	box5 = new Box(420,275,30,40);
	box6 = new Box(450,275,30,40);
	box7 = new Box(480,275,30,40);

	box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
	box12 = new Box(450,235,30,40);
	
	box13 = new Box(360,195,30,40);
	box14 = new Box(390,195,30,40);
	box15 = new Box(420,195,30,40);
	
	box16 = new Box(390,155,30,40);

	box17 = new Box(740,205,30,40);
    box18 = new Box(770,205,30,40);
    box19 = new Box(800,205,30,40);
    box20 = new Box(830,205,30,40);
	box21 = new Box(860,205,30,40);
	
    box22 = new Box(770,165,30,40);
    box23 = new Box(800,165,30,40);
	box24 = new Box(830,165,30,40);
	
    box25 = new Box(800,125,30,40);
    stone = new Stone (50, 200)
    slingShot = new SlingShot (stone.body, {
        x : 100,
        y : 200
    })
}


function draw(){
    if(backgroundImg)
{  background(backgroundImg);
} else{
background("lightblue");
}
    Engine.update(myengine);
    groundb.display();
    ground1.display();
    ground2.display();
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
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  stone.display();
  slingShot.display();
}

function mouseDragged()
{
   Matter.Body.setPosition(stone.body, { x:mouseX , y:mouseY});	
}

function mouseReleased()
{
	slingShot.fly();
}

function keyPressed()
{
   if(keyCode === 32)
   {
	  slingShot.attach(stone.body);
	  Matter.Body.setPosition(stone.body,{x:50 , y:200}); 
   }
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        bg = "bg1.png";
    }
    else{
        bg = "bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    //console.log(backgroundImg);
}
