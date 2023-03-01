let speed = 1000; // this value set the rate of which the function will be intervald thus will effect the speed of increasment
let count = 0;

let counter = document.getElementById("counter");
const bonusBtns = document.querySelectorAll("button");

//event listenr to catch the click of the button and then recalculate of the count
 bonusBtns.forEach(btn => {
    btn.addEventListener("click", ()=>{
    let newSpeed =   raiseBonus (btn.value);
        //  count += intBtn*10;
    return newSpeed;
        // console.log(newCount);
    } )
});
  

  
//clicked btn value enter as a permater and raise the count by multiply the value
function raiseBonus (btnValue){
    parseInt(btnValue);
    return speed -= speed * (btnValue*10)/100;
}



//raise the value constenetly by the seconds
function TimeRaiseCount(){
//    let time = new Date();
  
// seconds = time.getSeconds();
count += 5;
counter.innerHTML =  count;

}
setInterval(TimeRaiseCount,speed);

console.log(speed);