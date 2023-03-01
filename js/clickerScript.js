let speed = 1000; // this value set the rate of which the function will be intervald thus will effect the speed of increasment
let count = 0;

let counter = document.getElementById("counter");
const bonus = document.querySelectorAll("button");

//event listenr to catch the click of the button and then recalculate of the count
bonus.forEach(btn => {
    btn.addEventListener("click", ()=>{
    let newCount =   raiseBonus (btn.value);
        //  count += intBtn*10;
        console.log(newCount);
    } )
});
  

  
//clicked btn value enter as a permater and raise the count by multiply the value
function raiseBonus (btnValue){
    parseInt(btnValue);
    return count += btnValue*10;
}



//raise the value constenetly by the seconds
function TimeRaiseCount(){
//    let time = new Date();
  
// seconds = time.getSeconds();
count += 5;
counter.innerHTML =  count;

}

setInterval(TimeRaiseCount,1000);

