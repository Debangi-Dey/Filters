function preload() {

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
        console.log(results)
        console.log("leftEye" + results[0].pose.leftEye.x)
        console.log("leftEye" + results[0].pose.leftEye.y)
        console.log("rightEye" + results[0].pose.rightEye.x)
        console.log("rightEye" + results[0].pose.rightEye.y)
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
}