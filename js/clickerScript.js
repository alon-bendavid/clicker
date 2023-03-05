//music interactions
const music = document.getElementById('audio');

const stopSound = document.getElementById("stopSound");
const startSound = document.getElementById("startSound");
startSound.addEventListener("click",()=>{
    music.play();
    startSound.style.display = 'none';
    stopSound.style.display = 'block';

})
stopSound.addEventListener("click",()=>{
    music.pause();
    stopSound.style.display = 'none';
    startSound.style.display = 'block';


})
// document.getElementById("audio").play;

let playerName = document.getElementById("player").value;
console.log(playerName);
// let speed =  1000; 
let interval;
//set the player OBJ
let player = JSON.parse(localStorage.getItem(playerName)) || {
    speed: 1000,
    count: 0
  };
  
// let storedPlayer = JSON.parse(localStorage.getItem(playerName));
// console.log("storedPlayer.speed"+storedPlayer.speed);
let message = document.getElementById("message");

//prices
let price1 = 5 ;
let price2 = 15;
let price3 = 30;


//increasces the speed by precantge - bonus advantage
let speed1 = 0.15;
let speed2 = 0.40;
let speed3 = 0.60;

//buttons selcotrs
// const delCredit =document.getElementById("delCredit");
const delSpeed =document.getElementById("delSpeed");

const laborClick = document.getElementById("laborClick");
const bonus1 = document.getElementById("bonus1");
const bonus2 = document.getElementById("bonus2");
const bonus3 = document.getElementById("bonus3");
//print price into the buttons
bonus1.innerHTML = "Price: "+ price1 + "<br>Speed increase by "+speed1*100+"%";

bonus2.innerHTML ="Price: "+ price2 + "<br>Speed increase by "+speed2*100+"%";
bonus3.innerHTML = "Price: "+ price3 + "<br>Speed increase by "+speed3*100+"%";


// increase credit by menual clicking
laborClick.addEventListener("click",()=>{
     player.count += 1;
counter.innerHTML =  playerName + " You have created: "+ player.count + " Baguettes!";

})
//Delte the credit
// delCredit.addEventListener("click",()=>{
//     player.count = 0;
// counter.innerHTML =   player.count;

// })
//Delete the progress
delSpeed.addEventListener("click",()=>{
    player.speed = 1000;
player.count = 0;
localStorage.setItem(playerName, JSON.stringify(player));

location.reload()

// counter.innerHTML =   player.count;

})

//when the person choose a bonus he is being charged and getting speed advantage
///////bonus 1/////////
bonus1.addEventListener("click",()=>{
    if (player.count>=price1){
        message.innerHTML = "New employers are coming and they will fast the production by "+speed1*100+"%! "
        player.count = player.count-price1;
  
        clearInterval(interval);
        speedTime(speed1);
        interval =  setInterval(gameLoop,player.speed);

        localStorage.setItem('speed', player.speed.toString());

        // console.log(player.speed);
        setTimeout(() => {
            message.innerHTML = "";
        }, 2000);
            }else{
                message.innerHTML = "Not enough baguettes!"
            }
})
///////bonus 2/////////
bonus2.addEventListener("click",()=>{
    if (player.count>=price2){
        message.innerHTML = "New employers are coming and they will fast the production by "+speed2*100+"%! "

        player.count = player.count-price2;
        console.log(player.count);
        clearInterval(interval);
        speedTime(speed2);
        interval =  setInterval(gameLoop,player.speed)
        localStorage.setItem('speed', player.speed);
        setTimeout(() => {
            message.innerHTML = "";
        }, 2000);

            }else{
                message.innerHTML = "Not enough baguettes!"
            }
})
///////bonus 3/////////
bonus3.addEventListener("click",()=>{
    if (player.count>=price3){
        message.innerHTML = "New employers are coming and they will fast the production by "+speed3*100+"%! "

        player.count = player.count-price3;
        console.log(player.speed);
        clearInterval(interval);
        speedTime(speed3);
       interval =  setInterval(gameLoop,player.speed)
        localStorage.setItem('speed', player.speed.toString());
        setTimeout(() => {
        message.innerHTML = "";
        }, 2000);

        }else{
            message.innerHTML = "Not enough baguettes!"
        }  
    
    
})

//keep update the value with 1 point increacment
function gameLoop(){
    //control the music speed as the speed of the game increase
    let musicSpeed = Math.min(2, 1 + (1000 - player.speed) / 1000)
    music.playbackRate = musicSpeed;
    player.count += 1;
    
    counter.innerHTML = playerName + " You have created: "+ player.count + " Baguettes!";
    // localStorage.setItem('count', player.count.toString());
    // localStorage.setItem(playerName, JSON.stringify(player));
    localStorage.setItem(playerName, JSON.stringify(player));
    console.log(musicSpeed);
    


}

function speedTime(precenatge){
  return  player.speed -= precenatge*player.speed;
   
}
//Starting the game
if(!interval){
    interval = setInterval(gameLoop,player.speed);
    
}

// localStorage.setItem('speed', player.speed.toString());//reset the speed

