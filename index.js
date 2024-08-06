var s;
for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    s=document.querySelectorAll("button")[i];
    s.addEventListener("click",function(){
        handleClick(this.innerHTML);
        animationButton(this.innerHTML);
    });
}

document.addEventListener("keypress", function(e){
    handleClick(e.key);
    animationButton(e.key);
});
function handleClick(key){
    if(key==="k"){
        audio=new Audio("./sounds/crash.mp3");
        audio.play();
    }else if(key==="l"){
        audio=new Audio("./sounds/kick-bass.mp3");
        audio.play();
    }else if(key==="j"){
        audio=new Audio("./sounds/snare.mp3");
        audio.play();
    }else if(key==="w"){
        audio=new Audio("./sounds/tom-1.mp3");
        audio.play();
    }else if(key==="a"){
        audio=new Audio("./sounds/tom-2.mp3");
        audio.play();
    }else if(key==="s"){
        audio=new Audio("./sounds/tom-3.mp3");
        audio.play();
    }else if(key==="d"){
        audio=new Audio("./sounds/tom-4.mp3");
        audio.play();
    }
}
function animationButton(key){

    document.querySelector("."+ key).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+ key).classList.remove("pressed");
    },100);
}