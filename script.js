const container = document.querySelector('.grid-container');

// create a 16 by 16 grid of squares
for (let i=0; i<16; i++) {
  const row = document.createElement('div');
  row.classList.add('grid-row');
  for (let j=0; j<16; j++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');
    row.appendChild(square);
  }
  container.appendChild(row);
}

const squares = document.querySelectorAll('.grid-square');
console.log(squares);

// add event listeners to make squares turn color when moused over
squares.forEach(square => {
  square.addEventListener('mouseover', () => {
    square.classList.add('mousedOver');
  });
});