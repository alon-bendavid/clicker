// let speed =  1000; 

let speed = parseInt(localStorage.getItem('speed')) || 1000; 
console.log(speed);// set the interval refresh rate
let count = 0;
let counter = document.getElementById("counter");

let message = document.getElementById("message");

//prices
let price1 = 1;//5
let price2 = 2;//25
let price3 = 3;//100 


//increasces the speed by precantge - bonus advantage
let speed1 = 0.01;
let speed2 = 0.015;
let speed3 = 0.03;

//buttons selcotrs
const laborClick = document.getElementById("laborClick");
const bonus1 = document.getElementById("bonus1");
const bonus2 = document.getElementById("bonus2");
const bonus3 = document.getElementById("bonus3");

// laborClick
laborClick.addEventListener("click",()=>{
    count += 1;
counter.innerHTML =  count;

})

//when the person choose a bonus he is being charged and getting speed advantage
///////bonus 1/////////
bonus1.addEventListener("click",()=>{
    if (count>=price1){
        message.innerHTML = "You just got yourself an extra- "+speed1*100+"% speed advantge "
        count = count-price1;
//         console.log(count);
clearInterval(interval);
speedTime(speed1);
 interval =  setInterval(gameLoop,speed);

localStorage.setItem('speed', speed.toString());
console.log(speed);
    }else{
        message.innerHTML = "Not enough credit!"
    }
})
///////bonus 2/////////
bonus2.addEventListener("click",()=>{
    if (count>=price2){
        message.innerHTML = "You just got yourself an extra- "+speed2*100+"% speed advantge "

        count = count-price2;
        console.log(count);
        clearInterval(interval);
        speedTime(speed2);
     interval =    setInterval(gameLoop,speed)
localStorage.setItem('speed', speed);

    }else{
        message.innerHTML = "Not enough credit!"
    }
})
///////bonus 3/////////
bonus3.addEventListener("click",()=>{
    if (count>=price3){
        message.innerHTML = "You just got yourself an extra- "+speed3*100+"% speed advantge "

        count = count-price3;
        console.log(count);
        clearInterval(interval);
        speedTime(speed3);
       interval =  setInterval(gameLoop,speed)
localStorage.setItem('speed', speed.toString());

    }else{
        message.innerHTML = "Not enough credit!"
    }  
    
    
})


//keep update the value with 1 point increacment
function gameLoop(){
count += 1;
counter.innerHTML =  count;
console.log(speed);

}
// function speedTime(precenatge){
//     speed -= precenatge*speed;
   
// }

function speedTime(precenatge){
  return  speed -= precenatge*speed;
   
}
let interval;
//Starting the game
if(!interval){
    interval = setInterval(gameLoop,speed);
    
}

localStorage.setItem('speed', speed.toString());

