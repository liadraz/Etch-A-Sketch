let container = document.getElementById('container');
let sizeButton = document.querySelector('.size-button');
let resetButton = document.querySelector('.reset-button');


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


/* While Hover the Pixels Colors change*/
window.addEventListener('mouseover', changePixelsColor);

function changePixelsColor(e) {
    if (e.target.classList.contains('pixel')) {
        e.toElement.classList.add('single-color');
    }
}


/* Change Grid Divition Button */
sizeButton.addEventListener('click', changeGridSize);

function changeGridSize() {
    let squreNumber = getGridSize();
    let grid = Math.pow(squreNumber, 2);
    
    container.style.gridTemplateColumns = `repeat(${squreNumber} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${squreNumber} , 1fr)`;
    
    removeGridDivs()
    for (let i = 0; i < grid; i++) {
        createPixel();
    }
}

function getGridSize() {
    let lineNumber = prompt('Enter Grid size: ');
    return lineNumber;
}

function removeGridDivs() {
    let divsRemove = document.querySelectorAll('.pixel');
    for (let i = 0; i < divsRemove.length; i++) {
        divsRemove[i].remove();
    }
}


/* Reset Grid Button */
resetButton.addEventListener('click', resetGrid);

function resetGrid() {
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach(pixel => pixel.classList.remove('single-color'));
}



