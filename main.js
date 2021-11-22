noseX=0
noseY=0
function preload() {
mous=loadImage("https://i.postimg.cc/8PQVj5Hh/Moustache-PNG-Pic.png")
}

function setup(){
    C1=createCanvas(500, 500)
    C1.center()
    v1=createCapture(VIDEO)
    v1.size(500, 500)
    v1.hide()
    pn=ml5.poseNet(v1, modelLoaded)
    pn.on('pose', gotPoses)
}
function gotPoses(results){
    if (results.length>0){
       noseX=results[0].pose.nose.x
       noseY=results[0].pose.nose.y
    }
}

function modelLoaded(){
    console.log("posenet loaded")
}
function Take_Snap(){
    save("myFilter.png")
}

function draw(){
    image(v1, 0, 0, 500, 500)
    image(mous, noseX-50, noseY, 100, 50)
}