// document.body.innerHTML = `<div id="container">
//         <h1 class="flex">ClickFast</h1>
//         <div>Score <span id="score">0</span></div>
//         <div>Timer : <span id="timer">5</span> secondes restantes</div>
//         <button type="button" id="button-clicker">Cliquez ici</button>
//         <p class="catchphrase">Sois le plus rapide des clickers du game ⚡</p>
//       </div>`;

// const game = require("./script.js");

// test("ya quoi dans game", () => {
//     console.log(game);
// })

// test("est-ce que l'augmentation de score marche", () => {
//     document.addEventListener("DOMContentLoaded", () =>{
//         document.querySelector("#button-clicker").click();
//         document.querySelector("#button-clicker").click();
//         expect(Number(document.querySelector("#score").innerText)).toBe(2);
//     })
// })




// ------------------------------------------------

/**
 * @jest-environment jsdom
 */
const { initCounter, getValue, resetValue } = require("./script");

describe("Button click counter", () => {
  let button;

  beforeEach(() => {
    // Reset DOM
    document.body.innerHTML = `<button id="myBtn">Click</button>`;
    button = document.getElementById("myBtn");

    // Reset counter value
    resetValue();
  });

  test("increments value on click", () => {
    initCounter("myBtn");

    expect(getValue()).toBe(0);

    button.click();
    expect(getValue()).toBe(10);

    button.click();
    expect(getValue()).toBe(2);
  });
});
