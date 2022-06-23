const container = document.getElementById('container');
const sizeButton = document.querySelector('.size-button');
const resetButton = document.querySelector('.reset-button');

const classicBtn = document.querySelector('#classic');
const rainbowBtn = document.querySelector('#rainbow');
const addGrayBtn = document.querySelector('#add-gray');
const pickAColorBtn = document.querySelector('#pick-color');


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


/* While Hover the Pixels Colors change */
window.addEventListener('mouseover', changePixelsBehavior);

function changePixelsBehavior(e) {

    if (e.target.classList.contains('pixel')) {

        if (classicBtn.classList.contains('clss')) {
            e.target.style.background = "#494b4a";
        }

        if (rainbowBtn.classList.contains('pride')) {
            let R = Math.floor(Math.random() * 256);
            let G = Math.floor(Math.random() * 256);
            let B = Math.floor(Math.random() * 256);
            let bgRandomColor = `rgb(${R} , ${G}, ${B})`;
            e.target.style.background = bgRandomColor;
        }
    }
}


/* Choose different color modes */
window.addEventListener('click', switchButtons);

function switchButtons(e) {
    let currentIdButton = e.target.id;

    let mainButtons = document.querySelectorAll('.style-button');
    mainButtons.forEach(btn => btn.classList.remove('on', 'clss', 'pride', 'gray'));

    switch (currentIdButton) {
        case 'classic':
            classicBtn.classList.add('on', 'clss');
            break;
        case 'rainbow':
            rainbowBtn.classList.add('on', 'pride');
            break;
    }
}


/* Change Grid Division Button */
sizeButton.addEventListener('click', changeGridSize);

function changeGridSize() {
    let squareNumber = getGridSize();
    let grid = Math.pow(squareNumber, 2);
    
    container.style.gridTemplateColumns = `repeat(${squareNumber} , 1fr)`;
    container.style.gridTemplateRows = `repeat(${squareNumber} , 1fr)`;
    
    removeGridDivs()
    for (let i = 0; i < grid; i++) {
        createPixel();
    }
}

function getGridSize() {
    let lineNumber;
    while (true) {
        lineNumber = prompt('Enter Grid size: ');

        if (lineNumber > 0 && lineNumber <= 100) {
            break;
        }
    }
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
    pixels.forEach(pixel => pixel.style.removeProperty('background'));
}