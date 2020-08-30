// Taking two variables and picking up by id 
var character = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;

// Now we're accessing the function jump
function jump(){
    if(character.classList!= "animate"){
        character.classList.add("animate");
    }
    // I click the Animation,the animation ran once but we can't reran it aagain and again, so
    //Remove the class once we're done with animation.
    setTimeout(function(){
        character.classList.remove("animate");
    },500)
}

//To check if you loose the game or not!
var checkDead= setInterval(function(){
    //To check if there's 
    //Check the top of the position of the character
    var characterTop=parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft=parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation="none";
        block.style.display="none";
        alert("Better luck next time!");
    } else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
},10);