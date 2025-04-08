const gridContainer = document.querySelector('.grid-container');

// Function to create the grid
function createGrid(columns, rows) {
    // Clear any existing grid items
    gridContainer.innerHTML = '';

    // Calculate the size of each grid item
    const itemWidth = 100 / columns; // Percentage width
    const itemHeight = 100 / rows; // Percentage height

    // Create grid items
    for (let i = 0; i < columns * rows; i++) {
        const gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.style.width = `${itemWidth}%`;
        gridItem.style.height = `${itemHeight}%`;
        gridContainer.appendChild(gridItem);
    }
}

// Example: Create a 4x4 grid
createGrid(4, 4);

// Event listener for the resize button
let resizeButton = document.getElementById('resize');
resizeButton.addEventListener('click', () => {
    // Prompt the user for the number of rows and columns
    let size = parseInt(prompt('Enter the number of rows/columns for the grid (e.g., 16 for a 16x16 grid):'), 10);

    // Validate the input
    if (!isNaN(size) && size > 0 && size <= 100) {
        createGrid(size, size); // Create a grid with the specified size
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});