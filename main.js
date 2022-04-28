function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(500, 450);
    canvas.position(700, 120);
    
    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#000000');
}

function modelLoded() {
    console.log('PoseNet Is Intialized!')
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
    }
}