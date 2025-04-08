const gridContainer = document.querySelector('.grid-container');


function createGrid(columns, rows) {
    
    gridContainer.innerHTML = '';

    const itemWidth = 100 / columns; 
    const itemHeight = 100 / rows; 

    for (let i = 0; i < columns * rows; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${itemWidth}%`;
        gridItem.style.height = `${itemHeight}%`;
        gridContainer.appendChild(gridItem);
    }
}

createGrid(16, 16);

let resizeButton = document.getElementById('resize');
resizeButton.addEventListener('click', () => {
    let size = parseInt(prompt
        ('Enter the number of rows/columns for the grid (e.g., 16 for a 16x16 grid):'), 10);
    if (!isNaN(size) && size > 0 && size <= 100) {
        createGrid(size, size);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});

let color = 'black';
let rainbowMode = false; 
let eraserMode = false; 

function getRandomColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor(event) {
    if (event.target.classList.contains('grid-item')) {
        if (rainbowMode) {
            event.target.style.backgroundColor = getRandomColor();
        } else {
            event.target.style.backgroundColor = color;
        }
    }
}

gridContainer.addEventListener('mouseover', changeColor);

let clearButton = document.getElementById('clear');
clearButton.addEventListener('click', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.style.backgroundColor = 'white';
    });
});

let colorPicker = document.getElementById('color');
colorPicker.addEventListener('input', (event) => {
    color = event.target.value; 
});

let rainbowButton = document.getElementById('rainbow');
rainbowButton.addEventListener('click', () => {
    rainbowMode = !rainbowMode; 
    if (rainbowMode) {
        rainbowButton.textContent = 'Rainbow Mode: ON';
        eraserMode = false;
        eraserButton.textContent = 'Eraser Mode: OFF'; 
    } else {
        rainbowButton.textContent = 'Rainbow Mode: OFF'; 
    }
});

let eraserButton = document.getElementById('eraser');
eraserButton.addEventListener('click', () => {
    eraserMode = !eraserMode; 
    if (eraserMode) {
        color = 'white';
        eraserButton.textContent = 'Eraser Mode: ON';
        rainbowMode = false;
        rainbowButton.textContent = 'Rainbow Mode: OFF';
    } else {
        color = 'black'; 
        eraserButton.textContent = 'Eraser Mode: OFF'; 
    }
});