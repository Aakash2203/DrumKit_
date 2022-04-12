
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{

document.querySelectorAll("button")[i].addEventListener("click", function(){
   var k=this.innerHTML;
    playsound(k);
    animation(k);
});
}





document.addEventListener("keypress",function(eve){
     var f=eve.key;
     playsound(f);
     animation(f);

});













function playsound(letter)
{

  switch(letter)
   {
      case "w":
      var audio1= new Audio("crash.mp3");
      audio1.play();
      break;

      case "a":
      var audio2= new Audio("kick-bass.mp3");
      audio2.play();
      break;

      case "s":
      var audio3= new Audio("tom-1.mp3");
      audio3.play();
      break;

      case "d":
      var audio4= new Audio("tom-2.mp3");
      audio4.play();
      break;


      case "j":
      var audio5= new Audio("tom-3.mp3");
      audio5.play();
      break;

      case "k":
      var audio6= new Audio("tom-4.mp3");
      audio6.play();
      break;


      case "l":
      var audio7= new Audio("snare.mp3");
      audio7.play();
      break;

      default:log.console(k);


   }



}






function animation(z){

  document.querySelector("."+z).classList.add("pressed");


setTimeout(function(){
document.querySelector("."+z).classList.remove("pressed");

},100)






}
