// seleziono il container dentro il 'DOM'

const gridContainer = document.getElementsByClassName('container');
// console.log(gridContainer);

// creo un ciclo 'for' per inserire 100 elementi al interno del container
for (let index = 0; index < 100; index++) {
    // creo un elemento 
    const squareEl = document.createElement('article');
    // aggiungo una classe a squareEl
    squareEl.classList.add('box');
    gridContainer.appendChild(squareEl);
    
}