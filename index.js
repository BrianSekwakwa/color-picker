let input = document.querySelectorAll("input");
let body = document.querySelector("body");
let colorState = {
  red: "0",
  green: "0",
  blue: "0"
};

input.forEach(color => {
  color.addEventListener("input", change);
});

function change(e) {
  switch (e.target.name) {
    case "red":
      colorState.red = e.target.value;
      break;
    case "green":
      colorState.green = e.target.value;
      break;
    case "blue":
      colorState.blue = e.target.value;
      break;
    default:
      break;
  }

  body.style.backgroundColor = `${colorState.red}${colorState.green}${
    colorState.blue
  }`;
}
