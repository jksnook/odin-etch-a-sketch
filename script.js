const container = document.querySelector('.grid-container');

// create a 16 by 16 grid of squares
function drawGrid(size) {
  const oldRows = document.querySelectorAll('.grid-row');
  oldRows.forEach(row => row.remove());
  for (let i=0; i<size; i++) {
    const row = document.createElement('div');
    row.classList.add('grid-row');
    for (let j=0; j<size; j++) {
      const square = document.createElement('div');
      square.classList.add('grid-square');
      row.appendChild(square);
    }
    container.appendChild(row);
  }

  // add event listeners to make squares turn color when moused over
  const newSquares = document.querySelectorAll('.grid-square');
  newSquares.forEach(square => {
    square.addEventListener('mouseover', () => {
      square.classList.add('mousedOver');
    });
  });
}

drawGrid(16);

const button = document.querySelector('.grid-select');

button.addEventListener('click', () => {
  let size = prompt('Please enter a grid size <= 100');
  if (size > 100) size = 100;
  drawGrid(size);
})