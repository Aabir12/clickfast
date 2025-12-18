// // Une fois que le HTML ressemble à ce que vous voulez : 
// // 1. Faire une variable count, qui stockera le nombre de clics
// // 2. Faire un eventListener sur le bouton

// // console.log(11);
// let i = 0;
// let show = document.getElementById("numberCount");
// function clicking() {
    
//     startCountdown();
       

//     console.log(i);
//     i = i+1;
    
//     show.innerHTML =+ i;
// //    show.append(i);
    
// }

// function reset (){
//     i = 0;
//      let show = document.getElementById("numberCount")
//      show.innerHTML = i
// }



    // const countdownEl = document.getElementById('countdown');
    // let timeLeft = 5; 

    // function startCountdown() {
    //     timeLeft = 5;
    //     countdownEl.textContent = timeLeft;

        
    //     if (window.countdownTimer) clearInterval(window.countdownTimer);

        
    //     window.countdownTimer = setInterval(() => {
    //         timeLeft--;
    //         countdownEl.textContent = timeLeft;

    //         if (timeLeft <= 0) {
    //             clearInterval(window.countdownTimer);
                

    //         }
    //     }, 1000);
    // }

//     // show.addEventListener("click", 
//     // Start the first countdown
 


let count = 0;
const button = document.getElementById("button-clicker");
const result = document.getElementById("result");
const reset = document.getElementById("reset");
button.disabled = false;
function timer() {
    // startCountdown()
  setTimeout(() => {
    button.disabled = true;
  }, 5000);
}
 
button.addEventListener("click", () => {
  count++;
  result.textContent = count;
  timer();
});
 
reset.addEventListener("click", () => {
  result.textContent = 0;
  location.reload();
});