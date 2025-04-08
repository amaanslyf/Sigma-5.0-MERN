// h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("blue", 1000);
//       });
//     });
//   });
// });
// The above code is an example of callback hell, where multiple nested callbacks make the code hard to read and maintain.

//SOLVED USING PROMISES
let h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("Color changed to " + color);
    }, delay);
  });
}

changeColor("red", 1000)
  .then((result) => {
    console.log(result);
    return changeColor("orange", 1000);
  })
  .then((result) => {
    console.log(result);
    return changeColor("green", 1000);
  })
  .then((result) => {
    console.log(result);
    return changeColor("yellow", 1000);
  })
  .then((result) => {
    console.log(result);
    return changeColor("blue", 1000);
  })
  .then((result) => {
    console.log(result);
  })



