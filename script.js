const grid = document.querySelector(".grid");

for (i = 0; i < 16; i++) {
  let square = document.createElement("div");
  square.setAttribute("class", "square");
  grid.appendChild(square);
}