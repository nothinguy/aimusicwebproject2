song = "";
song2 = "";


function preload() {
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(400,700);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
image(video,0,0,600,400);

}


function play(){
song.play(); 
}