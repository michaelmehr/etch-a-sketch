const container = document.querySelector('.container');
let gridItems = document.querySelectorAll('.grid-item');

function generateGrid(gridSize = 16) {
    for (let row = 1; row <= gridSize; row++) {
        const gridRow = document.createElement('div');
        gridRow.classList.add("grid-row", "flex");
        container.appendChild(gridRow);
        for (let col = 1; col <= gridSize; col++) {
            const gridItem = document.createElement('div');
            gridItem.classList.add("grid-item");
            gridRow.appendChild(gridItem);
        }
    }
    gridItems = document.querySelectorAll('.grid-item');
}