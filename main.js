noseX = 0;
noseY = 0;
leftWristX = 0;
rightWristX = 0; difference = 0;
function setup() {
    video= createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,550);
canvas.position(560,150);
poseNet= ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}
function draw () {
    background('#969A97');
    fill("#000080");
    stroke("#0000FF");
    square(noseX,noseY,difference);
    document.getElementById("squaresize").innerHTML = "width and height of the square will be =  " + difference +"px";
    
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX-rightWristX) ;

        console.log(results);
    }
}

