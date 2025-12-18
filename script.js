// // Une fois que le HTML ressemble à ce que vous voulez :
// // 1. Faire une variable count, qui stockera le nombre de clics
// // 2. Faire un eventListener sur le bouton

// let started = false;

// let timerId;

// let game = () => {
//   document.querySelector("#score").innerText = Number(document.querySelector("#score").innerText) + 1;
//   if (!started) {
//     timerId = setInterval(() => {
//       document.querySelector("#timer").innerText = Number(document.querySelector("#timer").innerText) - 1;
//     }, 1000);
//     setTimeout(() => {
//       document.querySelector("#button-clicker").removeEventListener("click", game);
//       clearInterval(timerId);
//       document.querySelector("#sendScore").style.display = "block";
//     }, 5000);
//   }
//   started = true;
// };

// document.querySelector("#button-clicker").addEventListener("click", game);





// const getData = async () => {
//   const url = "https://672e1217229a881691eed80f.mockapi.io/scores";

//   try {
//     const response = await fetch(url);

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     // console.log(data);
    
//     showScore(data);
//   } 
//   catch (error) {
//     // console.error("Error retrieving data:", error);
//   }
// };

// getData();

// function showScore(data){
//   console.log(data);
  
//   let ans = "";
//   for(let i = data.length-1; i > data.length-10; --i){
//     ans += score(data[i]);
//   }
//   // console.log(ans);
  
//   document.querySelector("#scores").innerHTML = ans;
// }


// function score(data){
//   return `
//     <div class="scoreInfo">
//        <img src="${data.avatar}" alt="" class="avatar"> <span>${data.username}</span> 
//        <p>Score : ${data.score}</p>
//        <a href="${data.website_url}">Voir sa version du projet</a>
//     </div>
//   `
// }




// const postData = async () => {
//   const url = "https://672e1217229a881691eed80f.mockapi.io/scores";

//   const data = {
//     createdAt: new Date().toISOString(),
//     username: "Aabir12",
//     avatar:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsgwHunQHZEgzfSH0rdvrIWeBY-oPrhqeNgA&s",
//     score: Number(document.querySelector("#score").innerText),
//     website_url: "https://github.com/Aabir12/clickfast",
//   };

//   try {
//     const response = await fetch(url, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const result = await response.json();
//     console.log("Data posted successfully:", result);
//   } catch (error) {
//     console.error("Error posting data:", error);
//   }
// };



// ----------------------------

// counter.js
let value = 0;

function initCounter(buttonId) {
  const btn = document.getElementById(buttonId);
  if (!btn) throw new Error("Button not found");

  btn.addEventListener("click", () => {
    value++;
  });
}

function getValue() {
  return value;
}

function resetValue() {
  value = 0;
}

module.exports = { initCounter, getValue, resetValue };
