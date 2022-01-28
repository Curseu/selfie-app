var SpeechRecognition=window.webkitSpeechRecognition;
var sap= new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
  sap.start();
}
sap.onresult=function run(event){
    console.log(event);
    var suse=event.results[0][0]. transcript;
    console.log(suse);
    document.getElementById("textbox").innerHTML=suse;
    if(suse=="take my selfie"){
    console.log("#taking selfie");
    
    speak();
    }
}
function speak(){
  var fire=window.speechSynthesis;

  speakinfo="taking your selfie in five seconds";
  var judgement=new SpeechSynthesisUtterance(speakinfo);
  fire.speak(judgement);
Webcam.attach(camara);
setTimeout(function(){
  take_snapshot();
  save();
},5000);
}
Webcam.set({
  width:360,
  height:250,
  image_format:'png',
  png_quality:100
});
camara=document.getElementById("camera");
function take_snapshot(){
  Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="endermen" src="'+data_uri+'">';
  });
}
function save(){
  link=document.getElementById("link");
  image=document.getElementById("endermen").src;
  link.href=image;
  link.click();

}
