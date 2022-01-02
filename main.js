var img = "";

var song = "";

status = "";

objects = [];

function preload() {
    song = loadSound("alert.mp3");
}

function setup() {
    canvas = createCanvas(500,500);
    canvas.position(420,150);
    video = createCapture(VIDEO);
    video.hide();

    object_detector = ml5.objectDetector("cocossd" , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!!");
    status = true;
}

function gotResult(error,results) {
    if(error) {
        console.error(error);
    }

    else{
        console.log(results);
        objects = results;
    }
}

function draw() {
    image(video,0,0,600,500);

    if(status != "") {
        r = random(255);
        g = random(255);
        b = random(255);
        object_detector.detect(video , gotResult);
        for(objects == "person") {
            song.stop();
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("yes_or_no").innerHTML = "Baby Found";
            fill(r,g,b);
            stroke(r,g,b);
            noFill();
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%" , objects[i].x - 15, objects[i].y - 15);
            rect(objects[i].x - 15 , objects[i].y - 15 , objects[i].width , objects[i].height);
    }

    else(){
        song.play();
    }
 
}

}
