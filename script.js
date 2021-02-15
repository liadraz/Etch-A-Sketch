let container = document.getElementById('container');
let pixels = document.querySelectorAll('.pixel');
let sizeButton = document.querySelector('.size-button');

/* Create Initial Grid of 16X16 */
createGrid();

function createGrid() {
    let rowNumber = 16;
    let grid = Math.pow(rowNumber, 2);
    
    container.classList.add('grid-size');
    
    for (let i = 0; i < grid; i++) {
        createPixel();
    }
}

/* Create one Pixel div */
function createPixel() {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel');
    container.appendChild(pixel);
}

/* While Hover Change The Pixels Color */
window.addEventListener('mouseover', changePixelsColor);

function changePixelsColor(e) {
    if (e.target.classList.contains('pixel')) {
        e.toElement.classList.add('single-color');
    }
}






/* sizeButton.addEventListener('click', createGrid);

function getGridSize() {
    let rowNumber = prompt('Enter Grid size: ');
    return rowNumber;
}
 */
