let container = document.getElementById('container');
let sizeButton = document.querySelector('.size-button');
let resetButton = document.querySelector('.reset-button');

let classicBtn = document.querySelector('#classic');
let rainbowBtn = document.querySelector('#rainbow');
let addGrayBtn = document.querySelector('#add-gray');
let pickAColorBtn = document.querySelector('#pick-color');


/* Create Initial Grid of 16X16 */
createGrid();
classicBtn.classList.add('on');

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
window.addEventListener('mouseover', changePixelsBehaviour);

function changePixelsBehaviour(e) {
    if (e.target.classList.contains('pixel')) {
        e.toElement.classList.add('single-color');
    }
}

/* Choose different color modes */
window.addEventListener('click', switchButtons);

function switchButtons(e) {
    let currentIdButton = e.target.id;

    let mainButtons = document.querySelectorAll('.style-button');
    mainButtons.forEach(btn => btn.classList.remove('on'));

    switch (currentIdButton) {
        case 'classic':
            classicBtn.classList.add('on');
            break;
        case 'rainbow':
            rainbowBtn.classList.add('on');
            break;
        case 'add-gray':
            addGrayBtn.classList.add('on');
            break;
        case 'pick-color':
            pickAColorBtn.classList.add('on');
            break;
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
    while (true) {
        let lineNumber = prompt('Enter Grid size: ');
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
    pixels.forEach(pixel => pixel.classList.remove('single-color'));
}



/* 
V    1. create a condition grid cannot be greater than 100 and 
V    prompt again if user is not giving 1-100 integer

2. V buttons should be on/off while clicked -

    a. if button color clicked == single color will fill the pixels
    b. RGB == rainboe colors
    c gray == 10% of brightness will added to the pixel color
    D. pick your own color.

3. while clicking the right click mouse button erase pixel. 

Design :
1. Make it responsive
2. Apply UI colors and stuff
*/




