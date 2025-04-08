const container = document.querySelector("#container");

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
}

generateGrid (2);

const tiles = document.querySelectorAll(".tile");
tiles.forEach(tile => {
    tile.addEventListener("mouseover", () => {
        console.log("Hovered")
      });
});
