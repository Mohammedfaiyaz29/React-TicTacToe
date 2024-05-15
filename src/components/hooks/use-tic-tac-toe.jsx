import { useState } from "react"

const initialBoard = () => Array(9).fill(null);


 const useTictacToe = () => {
    const [ board , setBoard ] = useState(initialBoard())
    const [isXNext, setIsXNext] = useState(true);

    const WINNING_PATTERNS = [
        // this is for 3x3
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
// console.log(WINNING_PATTERNS.length);
    const calculateWinner = (currentBoard) =>{
        for (let i = 0; i < WINNING_PATTERNS.length; i++) {
            const [a, b, c] = WINNING_PATTERNS[i];

            if (
                currentBoard[a]&&
                currentBoard[a]=== currentBoard[b] &&
                currentBoard[a]=== currentBoard[c]
            ) {
                return currentBoard[a]
            }
            
        }

return null;

    };
       
    const handleClick = (index) => {

// check winner
const winner = calculateWinner(board);
if (winner || board[index]) return;
console.log(winner);
const newBoard = [...board]
newBoard[index] = isXNext ? "X" :"O";
setBoard(newBoard);
setIsXNext(!isXNext);
    };

    const getStatusMessage = () =>{

        const winner = calculateWinner(board);
        if(winner) return `Player ${winner} wins!`;
        if (!board.includes(null)) return `It's a draw`;
        return `player ${isXNext ? "x" : "o"} turn`;




    };







    const resetGame = () => {
         setBoard(initialBoard());
        //  setIsXNext(true);

    };

    return{ board , handleClick, getStatusMessage, resetGame};

}


export default useTictacToe;