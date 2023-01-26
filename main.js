status = "";

function setup() { 
    canvas = createCanvas(500,400);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function start() 
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("model_status").innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("input").value;
}

function modelLoaded() { 
    console.log("model loaded");
    status = "true";
}

function draw() {
    image(video, 0, 0, 500, 400);
}
