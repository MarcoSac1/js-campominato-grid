// seleziono il container dentro il 'DOM'

const gridContainer = document.querySelector('section.container');
// console.log(gridContainer);

// creo un ciclo 'for' per inserire 100 elementi al interno del container
for (let index = 0; index < 100; index++) {
    // creo un elemento 
    const squareEl = document.createElement('article');
    // aggiungo una classe a squareEl
    squareEl.classList.add('box');
    squareEl.append(index + 1);
    squareEl.addEventListener('click', function(){
        squareEl.classList.add('active');
        // faccio un console.log per stampare il numero che corrisponde alla cella cliccata
        console.log(index + 1);
    });
    
    // lo stampo nel 'DOM'
    gridContainer.appendChild(squareEl);
}