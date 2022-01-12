var starImg, bgImg
var star, starBody
var fada, imgFada
var vozFada
//criar variável para sprite de fada e imgFada

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body

function preload() {
  starImg = loadImage('images/star.png')
  bgImg = loadImage('images/starNight.png')
  //carregar animação de fada
  imgFada = loadAmimation('fairy.png,fairyImage1.png,fairyImage2')
  vozFada = loadSound('joyMusic.mp3')
}
function draw() {
  if (star.y > 470 && starBody.position.y > 470) {
    metter.body.setStatic(starBody, true)
  }
}

function setup() {
  createCanvas(800, 750)

  //escrever código para tocar o som vozFada
  vozFada.play()

  //criar sprite de fada e adicionar animação para fada
  imgFada.addAnimation('fada', fairy.png, fairyImage1.png, fairyImage2)

  star = createSprite(650, 30)
  star.addImage(starImg)
  star.scale = 0.2

  engine = Engine.create()
  world = engine.world

  starBody = Bodies.circle(650, 30, 5, { restitution: 0.5, isStatic: true })
  World.add(world, starBody)

  Engine.run(engine)
}
