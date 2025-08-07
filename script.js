const area = document.getElementById("area");
const exchange = document.getElementById("exchange");
const line = document.getElementById("line");
const number = document.getElementById("number");
  
function update() {
  number.textContent = `(${pad(area.value, 3)}) ${pad(exchange.value, 3)}-${pad(line.value, 4)}`;
}
  
function pad(num, n) {
  let x = num.toString();
  while (x.length < n) {
    x = "0" + x;
  }
  return x;
}

area.addEventListener("input", update);
exchange.addEventListener("input", update);
line.addEventListener("input", update);

update();
