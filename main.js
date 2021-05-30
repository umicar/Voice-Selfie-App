var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
}

function speak(){
    var synth=window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(Content);
    synth.speak(utterThis);
}

camera=document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format:'jpg',
    jpg_quality:90
});