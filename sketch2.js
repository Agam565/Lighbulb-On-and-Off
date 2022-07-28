/*var backgroundImg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;
function preload(){

}
function setup(){
createCanvas(windowWidth,windowHeight);
engine = Engine.create()
world = engine.world
ball = Bodies.circle(400,400,10,10);
World.add(world,ball)
}
function draw(){
background(51);
Engine.update(engine);
ellipse(ball.position.x,ball.position.y)
}
var  marks = [20,30,40,50,70,21,25,20,95,100,65,90,79,10];

function setup(){
createCanvas(400,400);
for(i = 0;i<marks.length;i++){
if(marks[i]>= 100){
console.log(marks[i])
}
}
}
function toFahrenehit(celsius){
return celsius *9/5 + 32
}
var check = toFahrenehit(0);
alert(check)*/
/*const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
let engine;
let world;*/
/*var dog,dogImg;
var dog2,dog2Img;

function preload(){
dogImg = loadImage("assets/dog.png");
dog2Img = loadImage("assets/dog2.png");
}
function setup(){
createCanvas(400,400)
dog = createSprite(130,200,10,10);
dog.addImage(dogImg);
dog.scale = 0.1;

dog2 = createSprite(50,200,10,10);
dog2.addImage(dog2Img);
dog2.scale = 0.04;
}
function draw(){
background(51);
if(keyWentDown("right")){
dog.x +=15;
}
if(keyWentDown("left")){
dog.x +=-15;
}
if(keyWentDown("up")){
dog.y += -15;
}
if(keyWentDown("down")){
dog.y += 15;
}

if(keyWentDown("D")){
    dog2.x +=15;
    }
    if(keyWentDown("A")){
    dog2.x +=-15;
    }
    if(keyWentDown("W")){
    dog2.y += -15;
    }
    if(keyWentDown("S")){
    dog2.y += 15;
    }
     /*const person = {
    firstName:"Agam",
    lastName:"Cheema",
    age:13,
    statement: "Hi, my name is Agam Cheema and I am 13 years old."
     }
     alert(person.statement + person.firstName)
     var stupid = zzz
drawSprites();
}*/
/*function setup(){
createCanvas(windowWidth,windowHeight)
}
function draw(){
background("blue");
}
function numberCheck(num1,num2){
var sum = num1 + num2;
console.log(sum);
if(sum == 23){
window.print();
}
}
numberCheck(20,3)*/
const person = {
    firstName:"Agam",
    lastName:"Cheema",
    age:13,
    statement: "Hi, my name is Agam Cheema and I am 13 years old."
     }
     alert(person.statement)
var lightBulb, lightBulbImg;
var button, buttonImg;
var onButton1, onButton1Img, offButton, offButtonImg;
var lightBulb1, lightBulb1Img, lightBulb2, lightBulb2Img;
function preload(){
lightBulbImg = loadImage("assets/lightBulb.jpg");
buttonImg = loadImage("assets/onButton.jpg");
onButton1Img = loadImage("assets/onButtons.jpg");
offButtonImg = loadImage("assets/offButtons.jpg");
lightBulb1Img = loadImage("assets/lightBulb2.jpg");
lightBulb2Img = loadImage("assets/lightBulb3.jpg");
}
function setup(){
createCanvas(windowWidth,windowHeight);
lightBulb1= createSprite(400,400);
lightBulb1.addImage(lightBulb1Img);
lightBulb1.scale = 0.3;

lightBulb2 = createSprite(400,400);
lightBulb2.addImage(lightBulb2Img);
lightBulb2.scale = 0.3;

onButton1 = createSprite(200,340);
onButton1.addImage(onButton1Img);
onButton1.scale = 0.3;

offButton = createSprite(200,500);
offButton.addImage(offButtonImg);
offButton.scale = 0.3;
/*lightBulb = createSprite(400,400);
lightBulb.addImage(lightBulbImg);
lightBulb.scale = 0.3;

button = createSprite(600,600);
button.addImage(buttonImg);
button.scale = 0.3;*/
}
function draw(){
background("white");
if(mouseIsOver(offButton)){
lightBulb1.visible = true;
lightBulb2.visible = false;
}
else if(mouseIsOver(onButton1)){
    lightBulb1.visible = false;
    lightBulb2.visible = true;
    }
    drawSprites();
}
/*function draw(){
    background("blue");
if(mouseIsOver(button)){
lightBulb.visible = true;
}
else{
lightBulb.visible = false;
}
drawSprites();
}*/