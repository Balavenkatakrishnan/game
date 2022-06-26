var gamePattern=''
function nextSequence(){
var randomNumber= Math.random()
randomNumber=randomNumber*4;
randomNumber=Math.floor(randomNumber)
console.log(randomNumber)

var buttonColours=["red", "blue", "green", "yellow"]
var randomChosenColour=buttonColours[randomNumber]
 gamePattern=randomChosenColour 
console.log(gamePattern)
if(gamePattern=="red"){
    $("#"+gamePattern).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio(playlist.red);
    audio.play();
}else if(gamePattern=="blue" ){

    $("#"+gamePattern).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    var audio = new Audio(playlist.blue);
    audio.play();
}else if(gamePattern=="green" ){
    $("#"+gamePattern).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio(playlist.green);
    audio.play();   
}else if(gamePattern=="yellow"){
    $("#"+gamePattern).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio(playlist.yellow);
    audio.play();   
}

}
var playlist = {
    red : 'sounds/red.mp3',
    blue : 'sounds/blue.mp3',
    green : 'sounds/green.mp3',
    yellow : 'sounds/yellow.mp3',
    wrong : 'sounds/wrong.mp3'
}
var colour=gamePattern

$(document).keypress(function(e) {
    var id1= 1;
  console.log()
    if(e.which == 97) {
        $('#level-title').text('Level '+id1)

        nextSequence()
        $(".btn").click(function(VAL){ 

            $(document). ready(() => {
                
                $("#"+VAL.target.id).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

                }); 
                console.log(VAL.target.id)
                $('#level-title').text('Level '+id1)
                if(VAL.target.id ==gamePattern){
                    var audio = new Audio(playlist.red);
                    audio.play();
                }else if( VAL.target.id==gamePattern ){
                    var audio = new Audio(playlist.blue);
                    audio.play();
                }else if(VAL.target.id==gamePattern ){
                    var audio = new Audio(playlist.green);
                    audio.play();
                }else if(VAL.target.id ==gamePattern){
                    var audio = new Audio(playlist.yellow);
                    audio.play();
                }else{
                    var audio = new Audio(playlist.wrong);
                    audio.play();
                    $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press A  to Restart");

      setTimeout(function () {  
        $("body").removeClass("game-over");
      }, 200);
return false
                }
                
        id1++

       
        setTimeout(function(){
            gamePattern=[]
            nextSequence()
            $('#level-title').text('Level '+id1)
        }, 1000); 
        })
    }})


       
       
       // $("#level-title")='Level '+id;
      
      
    





