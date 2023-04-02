x = 0;
y = 0;
 var screen_width=0;
 var screen_height=0;
draw_apple = "";
var speak_data="";
var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var apple="";

function preload(){
   function loadImage(){
    var apple=img("apple.png");
   }
}
function start()
{
  document.getElementById("status").innerHTML = "System is listening please speak";  
  recognition.start();
} 
 
recognition.onresult = function(event) {
to_number=Number(content);
if(Number.isInteger(to_number))
 console.log(event); 
 document.getElementById("status").innerHTML="Started drawing apple";
 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The speech has been recognized: " + content; 

}

function setup() {
 screen_width=window.innerWidth;
 screen_height=window.innerHeight;
 canvas=createCanvas(0,150);
 canvas=canvasPosition(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
  for(var i=1; i<=to_number; i++)
  {
    x=Math.floor(Math.random()*700);
    y=Math.floor(Math.random()*400);
    image(apple,x,y,50,50);
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
