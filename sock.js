// This function stores our state.

const storeState = () => {
  let oldState = {};
  return (stateChangeFunction) => {
    const newState = stateChangeFunction(oldState);
    oldState = { ...newState };
    return newState;
  }
}

// const stateChanger = storeState();
const firstSock = storeState();
const secondSock = storeState();


// This is a function factory. We can easily create more specific functions that alter a plant's soil, water, and light to varying degrees.

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop]: (state[prop] || "") + value
    })
  }
}


//algo
const socks = ["blue", "red", "brown"]
const randomnSock = socks[Math.floor(Math.random() * socks.length)];
const randomnSock2 = socks[Math.floor(Math.random() * socks.length)];
const randomnSock3 = socks[Math.floor(Math.random() * socks.length)];
const randomnSock4 = socks[Math.floor(Math.random() * socks.length)];


// We create two functions using our function factory. We could easily create many more.
const sockColor = changeState("color");
const sock1Color = changeState("color")(randomnSock);
const sock2Color = changeState("color")(randomnSock2);
const sock3Color = changeState("color")(randomnSock3);

$(document).ready(function () {
  const sock1 = firstSock(sock1Color);
  $('#sock1-value').text(sock1.color);

  // This function has side effects because we are using jQuery. Manipulating the DOM will always be a side effect.

  $('#drawer1').click(function () {
    const sock2 = secondSock(sock2Color);
    $("#buttons1").hide();
    $('#sockValue2').text(sock2.color);
    if (sock1.color === sock2.color) {
      $('#gameValue').text("You matched socks! Lets move on!")
      $('#score').text("one pair matched")
      $("#round2show").show();
      $("#round2show2").show();
      $("#round2").text(randomnSock4);
      //needs button that resets value, generates another s but keeps score
    } else {
      $('#gameValue').text("Not a match! Lets reset. Hit the refresh button.")
    }
  });

  $('#drawer2').click(function () {
    const sock2 = secondSock(sock3Color);
    $("#buttons1").hide();
    $('#sockValue2').text(sock2.color);
    if (sock1.color === sock2.color) {
      $('#gameValue').text("You matched socks! Lets move on!")
      $('#score').text("one pair matched")
      $("#round2show").show();
      $("#round2show2").show();
      $("#round2").text(randomnSock4);
      //needs button that resets value, generates another s but keeps score
    } else {
      $('#gameValue').text("Not a match! Lets reset. Hit the refresh button.")
    }
  });

});

