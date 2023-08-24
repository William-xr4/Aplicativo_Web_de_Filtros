var canvas;
var video;
var posenet;
var classifier;
var noseX=0;
var noseY=0;
var bigode;

function preload(){
    bigode=loadImage("Bigode.png"); //o link da imagem que stava sendo utilizado estava bugando o site, coloquei o nome do arquivo que já estava na pasta
}

function setup(){
    canvas=createCanvas(450, 400);
    canvas.position(670, 280); //precisei mudar a função center() para a position para o canvas ficar melhor posicionado
    video=createCapture(VIDEO);
    video.size(350, 300);
    video.hide();
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("Posenet foi carregado!");
}

function draw(){
    image(video, 0, 0, 480, 430);
    // fill("black");
    // stroke("black");
    // imageMode(CENTER);
    image(bigode, noseX, noseY, 100, 140);
}

function Tirar_foto(){
    save("foto.png");
}
function gotPoses(results){
    if(results.length>0){
      console.log(results);
      console.log("nariz x="+results[0].pose.nose.x);
      console.log("nariz y="+results[0].pose.nose.y);
      noseX=results[0].pose.nose.x;
      noseY=results[0].pose.nose.y;
    }
}