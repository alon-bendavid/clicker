let speed = 1000; // this value set the rate of which the function will be intervald thus will effect the speed of increasment
let count = 0;

let counter = document.getElementById("counter");
//increasces the speed by precantge
let value1 = 0.3;
let value2 = 0.5;
let value3 = 0.6;

//buttons selcotrs
const bonus1 = document.getElementById("bonus1");
const bonus2 = document.getElementById("bonus2");
const bonus3 = document.getElementById("bonus3");

//onclick event listeners
bonus1.addEventListener("click",()=>{
    clearInterval(interval);
    speedTime(value1);
    setInterval(gameLoop,speed)
})
bonus2.addEventListener("click",()=>{
    clearInterval(interval);
    speedTime(value2);
    setInterval(gameLoop,speed)
})
bonus3.addEventListener("click",()=>{
    clearInterval(interval);
    speedTime(value3);
    setInterval(gameLoop,speed)
})


//raise the value constenetly by the seconds
function gameLoop(){
//    let time = new Date();
  
// seconds = time.getSeconds();
count += 1;
counter.innerHTML =  count;
console.log(speed);

}
let interval = setInterval(gameLoop,speed);
// let interval = setInterval(gameLoop,speed);



function speedTime(precenatge){
    speed -= precenatge*speed;
   
}


//////////////////////////////////////////////////////////////DEAD CODE///////////////////////////////////////
//event listenr to catch the click of the button and then recalculate of the count
// bonusBtns.forEach(btn => {
//     btn.addEventListener("click", ()=>{
//     let newSpeed =  raiseBonus (btn.value);
//         //  count += intBtn*10;
//     return newSpeed;
//         // console.log(newCount);
//     } )
// });
  

  
// //clicked btn value enter as a permater and raise the count by multiply the value
// function raiseBonus (btnValue){
//     parseInt(btnValue);
//     console.log(speed -= speed * (btnValue*10)/100); 
// }
