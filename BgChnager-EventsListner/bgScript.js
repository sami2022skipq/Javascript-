document.body.style.backgroundColor = "green";
let hex = "0123456789ABCDEF";

const bgColor = () => {
  let color = "#";
  for (i = 0; i < 6; i++) {
    let radom = Math.floor(Math.random() * 16);

    color += hex[radom];
  }
  console.log("color: ", color);
  return color;
};
let interval;
const changeColor = () => {
  let color = bgColor();
  //   interval = setInterval()
  document.body.style.backgroundColor = color;
};
const stopChnagingColor = () => {
  if (interval) {
    clearInterval(interval);
    console.log("Stopped");
    interval = null;
  }
};

document.querySelector("#change").addEventListener("click", () => {
  if (!interval) {
    console.log("start Changing color:");
    interval = setInterval(() => {
      changeColor();
    }, 1100);
  }
});
document.querySelector("#stop").addEventListener("click", stopChnagingColor);
