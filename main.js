daStatus = "";
objName = "";

function setup(){
    canvas = createCanvas(500, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 400);
}

function startDetection(){
    model = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detection in progress";
    objName = document.getElementById("objectName").value;
}

function modelLoaded(){
    console.log("cocossd laoded succesfully");
    daStatus = true;
}