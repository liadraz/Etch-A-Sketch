let container = document.getElementById('container');


// Create Pixel element box
function createPixel() {
    let pixel = document.createElement('div');
    pixel.classList.add('pixel', 'border');
    container.appendChild(pixel);
}
let x = 16 * 16;
for (let i = 0; i < x; i++) {
    createPixel();
}


/* loop 16 rows
    loop 16 columns
    create div element
    insert div under the container
    assign border class to each div */



/* // Container :
    // first Row
    <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    //Second Row
    <div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div> */