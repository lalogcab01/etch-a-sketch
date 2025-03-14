const grid = document.querySelector(".grid");

for (i = 0; i < 16; i++) {
  let row = document.createElement("div");
  row.setAttribute("class", "row");
  grid.appendChild(row);
  for (j = 0; j < 16; j++) {
    let square = document.createElement("div");
    square.setAttribute("class", "square");
    row.appendChild(square);
    square.addEventListener("mouseover", () => {
      square.style.backgroundColor = "blue";
    })
    // square.addEventListener("mouseout", () => {
    //   square.style.backgroundColor = "transparent";
    // })
  }
}

