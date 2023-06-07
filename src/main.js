const container = document.querySelector('.container');
let gridItems = document.querySelectorAll('.grid-item');
let gridItemsArray = [...gridItems];
const button = document.querySelector('button');

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
    gridItemsArray = [...gridItems];
    gridItemsArray.forEach(e => e.addEventListener('mouseover', handleHover))
}

function handleHover(e) {
    e.target.classList.toggle('black');
}

generateGrid();