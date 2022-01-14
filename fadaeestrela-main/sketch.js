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
  imgFada = loadAnimation('images/fairy.png', 'images/fairyImage1.png', 'images/fairyImage2')
  vozFada = loadSound('sound/joyMusic.mp3')
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
  fada = createSprite(50, 500)
  fada.addAnimation('fada', imgFada)

  star = createSprite(650, 30)
  star.addImage(starImg)
  star.scale = 0.2

  engine = Engine.create()
  world = engine.world

  starBody = Bodies.circle(650, 30, 5, { restitution: 0.5, isStatic: true })
  World.add(world, starBody)

  Engine.run(engine)
}
