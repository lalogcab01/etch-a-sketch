function createGrid() {
  size = getGridSize();
  console.log(size);
}
function getGridSize() {
  grid.innerHTML = "";

  size = prompt("Introduce the size of the grid (number of squares per side):");
  
  for (i = 1; i <= size; i++) {
    let row = document.createElement("div");
    row.setAttribute("class", "row");
    grid.appendChild(row);
    for (j = 1; j <= size; j++) {
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
}

const button = document.querySelector("button");
const grid = document.querySelector(".grid");

button.addEventListener("click", createGrid);

