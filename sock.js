
const storeState = () => {
  let oldState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(oldState);
    oldState = { ...newState };
    return newState;
  }
}

const firstSock = storeState();
const secondSock = storeState();
const thirdSock = storeState();


const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || "") + value
    })
  }
}

const socks = ["blue", "red", "brown"]
function rondamonizer(choices, count) {
  result = [];
  for (let i = 0; i < count; i++) {
    result.push(choices[Math.floor(Math.random() * socks.length)]);
  }
  return result;
}

//cant figure out how to add multipl
// const name = changeState("name")
// const redname = changeState("name")("red")
// const bluename = changeState("name")("red")
// const brownname = changeState("name")("red")

const picture = changeState("img");
const red = changeState("img")("img/images-2.jpg")
const blue = changeState("img")("img/download.jpg")
const brown = changeState("img")("img/images-1.jpg")





const drawers = rondamonizer([blue, red, brown], 2);
const pick = rondamonizer([blue, red, brown], 1);


let score = 0;
// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
$(document).ready(function () {
  const firstpick = firstSock(pick[0]);
  const drawer1 = secondSock(drawers[0]);
  const drawer2 = thirdSock(drawers[1]);

  $('#pick').html(`<img src='${firstpick.img}'height="100" width="100">`);

  document.getElementById("drawer1").addEventListener("click", myFunction);
  document.getElementById("drawer2").addEventListener("click", myFunction2);

  function myFunction() {
    document.getElementById("drawer1").innerHTML = `<img src='${drawer1.img}'height="100" width="100">`;
    console.log(firstpick)
    console.log(drawer1)
    if (firstpick.img == drawer1.img) { document.getElementById("score").innerHTML = "nice" }
    else { document.getElementById("score").innerHTML = "you lose" }
  }
  function myFunction2() {
    document.getElementById("drawer2").innerHTML = `<img src='${drawer2.img}'height="100" width="100">`;
    if (firstpick.img == drawer2.img) { document.getElementById("score").innerHTML = "nice" }
    else { document.getElementById("score").innerHTML = "you lose" }
  }







});
















