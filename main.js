x = 0;
y = 0;
drawCircle = "";
drawRect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";
    recognition.start();
}

recognition.onresult = function (event) {

    console.log(event);

    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida como: " + content;
    if (content == "círculo") {
        x = Math.round(Math.random() * 800)
        y = Math.round(Math.random() * 800)
        document.getElementById("status").innerHTML = "Desenhando um círculo";
        drawCircle="yes"
    }
    if (content == "quadrado") {
        x = Math.round(Math.random() * 800)
        y = Math.round(Math.random() * 800)
        document.getElementById("status").innerHTML = "Desenhando um retângulo";
        drawRect="no"
    }
}

function setup(){
    canvas= createCanvas(800, 800)
}

function draw(){
    if (drawCircle== "yes"){
        r= Math.round(Math.random()*180)
        circle(x, y, r)
        drawCircle=""
    }
    if (drawRect== "no"){
        l= Math.round(Math.random()*180)
        rect(x, y, l, l)
        drawRect=""
    }
}