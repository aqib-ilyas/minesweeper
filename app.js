document.addEventListener('DOMContentLoaded', ()=>{
    const grid = document.querySelector('.grid');
    let width = 10;
    let bombsAmount = 20;
    let squares = [];

    // create Board
    function createBoard(){
        // get shuffled game array with random bombs
        const bombsArray = Array(bombsAmount).fill('bomb');
        const emptyArray = Array(width*width - bombsAmount).fill('valid');
        const gameArray = emptyArray.concat(bombsArray);
        const shuffledArray = gameArray.sort(()=> Math.random() -0.5);

        for(let i = 0; i < width*width; i++){
            const square = document.createElement('div');
            square.setAttribute('id', i);
            square.classList.add(shuffledArray[i]);
            grid.appendChild(square);
            squares.push(square);
        }

        // add numbers
        for(let i = 0; i < squares.length; i++){
            let total;
            const isLeftEdge = i % width === 0;
            const isRighEdge = i % width === width - 1;

            if(squares[i].classList.contains('valid')){
                if(i > 0 && !isLeftEdge && squares[i-1].classList.contains('bomb')) total ++;
                if(i > 9 && !isRightEdge && squares[i+1-width].classList.contains('bomb')) total ++;
                if(i > 10 && squares[i-width])
                squares[i].setAttribute('data', total);


            }
        }
    }
    createBoard();
})