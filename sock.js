
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


// const changeState = (prop) => {
//   return (value) => {
//     return (state) => ({
//       ...state,
//       [prop]: (state[prop] || "") + value
//     })
//   }
// }

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

// const picture = changeState("img");
// const red = changeState("img")("img/images-2.jpg")
// const blue = changeState("img")("img/download.jpg")
// const brown = changeState("img")("img/images-1.jpg")


const red = { img: "img/images-2.jpg" }
const blue = { img: "img/download.jpg" }
const brown = { img: "img/images-1.jpg" }

const drawermix = rondamonizer([blue, red, brown], 10);
const pick = rondamonizer([blue, red, brown], 10);


//column one  

//column two and three
let drawers = pick.concat(drawermix)
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
shuffle(drawers)
let score = 0;
// This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.
$(document).ready(function () {
  console.log(pick)
  console.log(drawers)
  var text = ""
  var text2 = ""
  var text3 = ""
  for (let i = 0; i < pick.length; i++) {
    text += `<div class="row"> <img src='${pick[i].img}'height="100" width="100">sock</div>`;
  }
  document.getElementById("pick").innerHTML = text;

  for (let i = 0; i < drawers.length; i++) {
    if (i <= 9) {
      text2 += `<div id="${i}" class="row"> <img src="img/images.jpg" height="100" width="100"> 
      <div id="hides"><img src='${drawers[i].img}'height="100" width="100">sock</div></div>`;
      // document.getElementById(`"${i}"`).addEventListener("click", myFunction);


    } else {
      text3 += `<div id="${i}"class="row"> <img src="img/images.jpg" height="100" width="100"> 
      <div id="hides"><img src='${drawers[i].img}'height="100" width="100">sock</div></div>`;
      // $("#drawer2").on("click", myFunction2);
    }
  }



  $("#1").on("click", myFunction2);


  document.getElementById("drawer1").innerHTML = text2;
  document.getElementById("drawer2").innerHTML = text3;








  // function myFunction() {
  //   for (let i = 0; i < drawers.length; i++) {

  //     // if (firstpick.img == drawer1.img) {
  //     //   $("#score").html("nice");
  //     // } else {
  //     //   $("#score").html("you lose");
  //     // }
  //   }
  function myFunction2() {
    $("#1").show(drawers[2].img)
    // if (firstpick.img == drawer2.img) {
    //   $("#score").html("nice");
    // } else {
    //   $("#score").html("you lose");
    // }
  }





  // };
});
















