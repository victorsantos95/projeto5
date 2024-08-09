let palavra;
let imagem;
let musica;

function preload() {
imagem = loadImage("miles.jpg")
musica = loadSound("musicamiles.mp3")
}
function setup(){
  createCanvas(600, 600);
  musica.loop();
}

  palavra = relampago();
  
function draw() {
  background("black")
  image(imagem, 50, 200, 600, 400);
  macaco();
  coca ();
  relampago();
}

function macaco(){
  background("black");
  fill("ligthblue");
  textSize(70);
textAlign(CENTER,CENTER);
}
  
function coca(){

  let maximo = width;
  let minimo = 0;
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
  let inicio = palavra.substring(0, quantidade);
  text(inicio, 300, 300);
}
   function relampago(){
    let palavras =["vou nada", "jao", "joia", " siuuuu!!!", " Deus é bom!"];
     return random(palavras);
    }
  