let saveEL = document.getElementById("save-el");
let countEL = document.getElementById("count-el");
console.log(saveEL);

let count = 0;

function increment() {
  count += 1;
  countEL.textContent = count;
}

function save() {
  let countS = count + " - ";
  saveEL.textContent += countS;
  countEL.textContent = 0;
  count = 0;
}
