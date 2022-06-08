 var buttonColour=["red", "blue", "green", "yellow"];
 var userpattern=[];
 var gamepattern=[];
 var currentlevel=0;
 var started=false;
 $(".btn").click(function(){
    var userChosenColour = $(this).attr("id");
    userpattern.push(userChosenColour);
    var audioid="sounds/"+userChosenColour+".mp3";
    playaudio(audioid);
    animatebutton(userChosenColour);
    console.log(userpattern);
    checkanswer(userpattern.length-1);
 });
function nextSequence()
{
    userpattern=[];
    currentlevel=currentlevel+1;
    $("#level-title").text("Level" + currentlevel);
    var randomnumber=Math.floor((Math.random() * 4));
    var randomChosenColour=buttonColour[randomnumber];
    gamepattern.push(randomChosenColour);
    var randomid="#"+randomChosenColour;
    var audioid="sounds/"+randomChosenColour+".mp3";
    playaudio(audioid);
    $(randomid).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    animatebutton(randomChosenColour);
     console.log(gamepattern);
    

    
     
}
function animatebutton(randomChosenColour){
    var randomid="#"+randomChosenColour;
    $(randomid).addClass("pressed");
    setTimeout(function(){
        $(randomid).removeClass("pressed")
    },100);

}
function playaudio(audioid){
    var audio= new Audio(audioid);
    audio.play();

}

$(document).keypress(function() {
    if (!started) {
        $("#level-title").text("Level " + currentlevel);
        nextSequence();
        started = true;
  }});
function checkanswer(currentlevel){
    if (gamepattern[currentlevel] === userpattern[currentlevel]) {

        console.log("success");
  
        //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
        if (userpattern.length === gamepattern.length){
  
          //5. Call nextSequence() after a 1000 millisecond delay.
          setTimeout(function () {
            nextSequence();
          }, 1000);
  
        }
  
      } else {
  
        console.log("wrong");
        $("#level-title").text("Game over! Press Any key to restart!");
        $("body").addClass("game-over")
        setTimeout(function(){
            $("body").removeClass("game-over")
        },100);
        startover();
  
        audioid="sounds/wrong.mp3";
        playaudio(audioid); 
        
      }
}
function startover() {
     gamepattern=[];
     currentlevel=0;
     started=false;

}