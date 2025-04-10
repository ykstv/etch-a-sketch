const container = document.querySelector("#container");
const restartbutton = document.querySelector("#restart");

function generateGrid (size) {
    let i = 0;
    while (i < size) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        container.appendChild(gridRow);
        i++;
    }

    let gridRows = document.querySelectorAll(".gridRow");

    gridRows.forEach((div) => {
        let n = 0;
        while (n < size) {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            div.appendChild(tile);
            n++;
        }
    });

    const tiles = document.querySelectorAll(".tile");

    tiles.forEach(tile => {
    tile.addEventListener("mouseover", (event) => {
        event.target.style.background = "orange";
      });
    });
}

restart.addEventListener("click", () => {
    let input = prompt("Input grid size", 16);
    let gridRows = document.querySelectorAll(".gridRow")
    gridRows.forEach(gridRow => {
        container.removeChild(gridRow);
    })
    if (0 < input && input <= 100 ) {
        generateGrid (input);
    }
    else {
        generateGrid (16);
    }
})

generateGrid (16);