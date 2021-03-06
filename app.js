// const canvasEl = document.querySelector("canvas");
// const canvasContext = canvasEl.getContext("2d");

// canvasEl.width = window.innerWidth;
// canvasEl.height = window.innerHeight;

// const starsColor = "red";
// const starsNumber = 1000;
// const size = 0.03; // maximum star size as a fraction of the screen width
// const speed = 0.05; // fraction of screen width per second

// // Setting up the stars
// let stars = [];
// let starsSpeed = speed * canvasEl.width;
// let horizontalVelocity = starsSpeed * randomSign() * Math.random();
// let verticalVelocity =
//   Math.sqrt(Math.pow(starsSpeed, 2) - Math.pow(horizontalVelocity, 2)) *
//   randomSign();
// // a = sqrt(c^2 - b^2)

// // randomizing the stars speed, size & location
// for (let i = 0; i < starsNumber; i++) {
//   let speedBoost = Math.random() * 2.5 + 0.5;
//   stars[i] = {
//     starRadius: (Math.random() * size * canvasEl.width) / 2,
//     horizontalPosition: Math.floor(Math.random() * canvasEl.width),
//     verticalPosition: Math.floor(Math.random() * canvasEl.height),
//     horizontalVelocity: horizontalVelocity * speedBoost,
//     verticalVelocity: verticalVelocity * speedBoost,
//   };
// }

// //--------------------- The Game Loop

// // the animation loop
// let timeDiff,
//   timeLast = 0;
// requestAnimationFrame(runStars);

// function runStars(timeNow) {
//   canvasContext.clearRect(0, 0, canvasEl.width, canvasEl.height);
//   // calculate the frame difference
//   timeDiff = timeNow - timeLast;
//   timeLast = timeNow;

//   // Drawing the stars
//   canvasContext.fillStyle = starsColor;
//   for (let i = 0; i < starsNumber; i++) {
//     canvasContext.beginPath();
//     canvasContext.arc(
//       stars[i].horizontalPosition,
//       stars[i].verticalPosition,
//       stars[i].starRadius,
//       0,
//       Math.PI * 2
//     );
//     canvasContext.fill();

//     // Update stars horizontal position
//     stars[i].horizontalPosition +=
//       stars[i].horizontalVelocity * timeDiff * 0.001;

//     // reposition stars to the other side of the screen when they move off either side of the screen
//     if (stars[i].horizontalPosition < 0 - stars[i].starRadius) {
//       stars[i].horizontalPosition = canvasEl.width + stars[i].starRadius;
//     } else if (
//       stars[i].horizontalPosition >
//       canvasEl.width + stars[i].starRadius
//     ) {
//       stars[i].horizontalPosition = 0 - stars[i].starRadius;
//     }

//     // Update stars vertical position
//     stars[i].verticalPosition += stars[i].verticalVelocity * timeDiff * 0.001;

//     // reposition stars to top/bottom side of the screen when they move off either from the top or bottom
//     if (stars[i].verticalPosition < 0 - stars[i].starRadius) {
//       stars[i].verticalPosition = canvasEl.height + stars[i].starRadius;
//     } else if (
//       stars[i].verticalPosition >
//       canvasEl.height + stars[i].starRadius
//     ) {
//       stars[i].verticalPosition = 0 - stars[i].starRadius;
//     }
//   }

//   requestAnimationFrame(runStars);
// }

// // randomSign Function
// function randomSign() {
//   return Math.random() >= 0.5 ? 1 : -1;
// }

// today is a good day to have a good day

// growth is hard. Change is hard. but there is nothing harder than staying in a place that you don't belong

/*
my code below
*/

// https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

const canvasEl = document.querySelector("canvas");
const canvasCTX = canvasEl.getContext("2d");

canvasEl.height = window.innerHeight;
canvasEl.width = window.innerWidth;

const starsColor = "antiquewhite";
const starsNumber = 2000;
const size = 0.04; // maximum star size as a fraction of the screen width;
const speed = 0.09; // fraction of screen width per second

// setting up our stars

let stars = [];
let starsSpeed = speed * canvasEl.width;
let horizontalVelocity = starsSpeed * randomSign() * Math.random();
let verticalVelocity =
  Math.sqrt(Math.pow(starsSpeed, 2) - Math.pow(horizontalVelocity, 2)) *
  randomSign();
// a = sqrt(c ^ (2 - b) ^ 2);

// randomizing the stars speed, size, and location

for (let p = 0; p < starsNumber; p++) {
  let speedBoost = Math.random() * 2.5 + 0.5;
  stars[p] = {
    starRadius: (Math.random() * size * canvasEl.width) / 2,
    horizontalPosition: Math.floor(Math.random() * canvasEl.width),
    verticalPosition: Math.floor(Math.random() * canvasEl.height),
    horizontalVelocity: horizontalVelocity * speedBoost,
    verticalVelocity: verticalVelocity * speedBoost,
  };
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- the game loop =-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-

// our animation loop aka, the GAME LOOP function

let timeDiff,
  timeLast = 0;
requestAnimationFrame(runStars);

function runStars(timeNow) {
  canvasCTX.clearRect(0, 0, canvasEl.width, canvasEl.height);
  // this is how you calculate the frame difference
  timeDiff = timeNow - timeLast;
  timeLast = timeNow;

  // drawing the stars
  canvasCTX.fillStyle = starsColor;
  for (let w = 0; w < starsNumber; w++) {
    canvasCTX.beginPath();
    canvasCTX.arc(
      stars[w].horizontalPosition,
      stars[w].verticalPosition,
      stars[w].starRadius,
      0,
      Math.PI * 2
    );
    canvasCTX.fill();

    // update the stars' horixontal position
    stars[w].horizontalPosition +=
      stars[w].horizontalVelocity * timeDiff * 0.001;

    // reposition stars to opposite side of the screen if they move off one side
    if (stars[w].horizontalPosition < 0 - stars[w].starRadius) {
      stars[w].horizontalPosition = canvasEl.width + stars[w].starRadius;
    } else if (
      stars[w].horizontalPosition >
      canvasEl.width + stars[w].starRadius
    ) {
      stars[w].horizontalPosition = 0 - stars[w].starRadius;
    }

    // update the stars' vertical position
    stars[w].verticalPosition += stars[w].verticalVelocity * timeDiff * 0.001;

    // reposition stars to the top of the screen if they move off the bottom and vice versa
    if (stars[w].verticalPosition < 0 - stars[w].starRadius) {
      stars[w].verticalPosition = canvasEl.height + stars[w].starRadius;
    } else if (
      stars[w].verticalPosition >
      canvasEl.height + stars[w].starRadius
    ) {
      stars[w].verticalPosition = 0 - stars[w].starRadius;
    }
  }

  requestAnimationFrame(runStars);
}

// setInterval(runStars, 1000 / 60); // another way of doing requestAnimationFrame() but we will not be doing it this way

// the randomSign function

function randomSign() {
  return Math.random() >= 0.5 ? 1 : -1;
}

/*
do not spoil what you have
by desiring what you have not;
remember that what you have now
was once among the things you hoped for 
- Epicurus
*/
