function createGrid() {
  grid.innerHTML = "";

  size = getGridSize();

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
function getGridSize() {
  sizeIsValid = false;

  while(!sizeIsValid){
    size = Number(prompt("Introduce the size of the grid (number of squares per side):"));

    if (size <= 0) {
      alert("INVALID SIZE: size has to be greater than 0");
    } else if (size > 100) {
      alert("INVALID SIZE: size has to be less than or equal to 100");
    } else {
      sizeIsValid = true;
    }
  }

  return size;
}

const button = document.querySelector("button");
const grid = document.querySelector(".grid");

button.addEventListener("click", createGrid);

