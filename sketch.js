//Para usar el motor físico estableceremos 3 objetos 
//creados en la librería matter.js (World,Engine y Bodys)

//Como los objetos pertenecen a la librería matter.js 

const Engine = Matter.Engine; //se hace referencia a ellos con Matter.Engine
const World = Matter.World;//se hace referencia a ellos con Matter.World
const Bodies = Matter.Bodies;//se hace referencia a ellos con Matter.Bodies
const Body = Matter.Body;//se hace referencia a ellos con Matter.Body

let engine;
let world;

function setup(){
  createCanvas(400,400);

}

function draw() {
  background(200);
  
  
}

