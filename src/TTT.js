import React, { useState, useEffect } from 'react';
import './TTT.css';
import tttImage from './ttt.png'; // Assuming the image is in the same directory

const TTT = () => {
  const initialBoardState = Array(9).fill('');
  const winningPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
  ];

  const [board, setBoard] = useState(initialBoardState);
  const [turn, setTurn] = useState('O');
  const [winner, setWinner] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [result, setGameResult] = useState(false);
  const handleBoxClick = (index) => {
    if (!board[index] && !winner) {
      const newBoard = [...board];
      newBoard[index] = turn;
      setBoard(newBoard);
      checkWinner(newBoard);
      setTurn(turn === 'O' ? 'X' : 'O');
    }
  };

  const checkWinner = (newBoard) => {
    for (let pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        setWinner(newBoard[a]);
        setGameStarted(false);
        setGameResult(true);
        return;
      }
    }
    if (newBoard.every((box) => box !== '')) {
      setWinner('Draw');
      setGameStarted(false);
        setGameResult(true);
    }
    
  };

  const resetGame = () => {
    setBoard(initialBoardState);
    setTurn('O');
    setWinner(null);
    setGameStarted(false);
    setGameResult(false);
  };

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="bodyT">
      <header className='heading'>Tic Tac Toe</header>
      {
        result&&(
            <div className="upper">
              {winner && <div className="winner">{winner === 'Draw' ? 'Draw match' : `Winner is ${winner}`}</div>}
               {winner && <button className="new" onClick={resetGame}>New Game</button>}
           </div>
        )
      }
     {
        !result&&(
            <div className="mainT">
            {!gameStarted && (
              <div className="image" id="image">
                <img src={tttImage} alt="Tic Tac Toe" />
              </div>
            )}
            {gameStarted && (
              <div className="continer">
                {board.map((box, index) => (
                  <button key={index} className="box" onClick={() => handleBoxClick(index)}>
                    {box}
                  </button>
                ))}
              </div>
            )}
          </div>
        )
     }
      <div className="button">
        {gameStarted ? (
          <button className="reset" onClick={resetGame}>Reset</button>
        ) : (
          <button className="start" onClick={startGame}>Start</button>
        )}
      </div>
    </div>
  );
};

export default TTT;
