import React, { useState, useEffect, useCallback } from 'react';
import './Snake.css';
import Snakee from './snake.jpg';

function Snake() {
  const generatePos = () => {
    const x = Math.floor(Math.random() * 20) + 1;
    const y = Math.floor(Math.random() * 20) + 1;
    return { x, y };
  };

  let [snake, setSnake] = useState([{ x: 8, y: 8 }]);
  const [foodPos, setFoodPos] = useState(generatePos());
  const [direction, setDirection] = useState('right');
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [dImage, setImage] = useState('flex');
  const [dBoard, setBoard] = useState('none');
  const [delay, setDelay] = useState(300);

  const handleKeyDown = useCallback((event) => {
    switch (event.code) {
      case 'ArrowUp':
        setDirection('up');
        break;
      case 'ArrowDown':
        setDirection('down');
        break;
      case 'ArrowRight':
        setDirection('right');
        break;
      case 'ArrowLeft':
        setDirection('left');
        break;
      default:
        break;
    }
  }, []);

  document.addEventListener('keydown', handleKeyDown);

  useEffect(() => {
    if (gameStarted) {
      const moveSnake = setInterval(() => {
        setImage('none');
        setBoard('grid');
        move();
      }, delay);
      return () => clearInterval(moveSnake);
    }
  }, [gameStarted, delay, direction, foodPos, snake]);
  useEffect(() => { 
    if (!gameStarted && snake[0].x === 8 && snake[0].y === 8) { 
      setGameStarted(true); 
      setDelay(250); 
    }
   }, [snake, gameStarted]); 
   function startGame() {
     setSnake([{ x: 8, y: 8 }]);
     if (!gameStarted && snake[0].x === 8 && snake[0].y === 8) { 
    }
     };

  const move = () => {
    let newSnake = [...snake];
    let head = { ...newSnake[0] };
    switch (direction) {
      case 'right':
        head.x++;
        break;
      case 'left':
        head.x--;
        break;
      case 'down':
        head.y++;
        break;
      case 'up':
        head.y--;
        break;
      default:
        break;
    }
    newSnake.unshift(head);
    newSnake.pop();
    if (head.x === foodPos.x && head.y === foodPos.y) {
      setDelay((prev) => prev - 10);
      newSnake.push({ ...newSnake[newSnake.length - 1] });
      setFoodPos(generatePos());
      updateScore(newSnake.length - 1);
    }
    if (head.x > 20 || head.x < 0 || head.y > 20 || head.y < 0) {
      resetGame();
    }
    setSnake(newSnake);
  };

  const updateScore = (newScore) => {
    setScore(newScore);
    if (newScore > highScore) {
      setHighScore(newScore);
    }
  };

  function resetGame() {
    setScore(0);
    setDelay(300);
    console.log('reset game');
    setGameStarted(false);

    // Reset snake and direction first
    setSnake([{ x: 8, y: 8 }]);
    setDirection('right');

    // Then update other states and log the game over message
    setTimeout(() => {
      setImage('flex');
      setBoard('none');
      console.log('game over');
    }, 0);
  };

  return (
    <div className="bodyS">
      <header className='heading'>Snake Game</header>
      <div>
      <div className="scores">
        <div>
          <h4 className='h4'>Current Score:</h4>
          <div id="currentScore">{score.toString().padStart(3, '0')}</div>
        </div>
        <div>
          <h4 className='h4'>High Score:</h4>
          <div id="highestScore">{highScore.toString().padStart(3, '0')}</div>
        </div>
      </div>
      <div className="b-1">
        <div className="b-2">
          <div className="b-3">
            <div className="img" id="img" style={{ display: dImage }}>
              <img src={Snakee} alt="Snake Game" style={{ width: '400px', height: '400px' }} />
            </div>
            <div id="gameboard" style={{ display: dBoard }}>
              {snake.map((segment, index) => (
                <div
                  key={index}
                  className={`snake ${index === 0 ? 'head' : ''}`}
                  style={{ gridColumn: segment.x, gridRow: segment.y }}
                ></div>
              ))}
              <div className="food" style={{ gridColumn: foodPos.x, gridRow: foodPos.y }}></div>
            </div>
          </div>
        </div>
      </div>
      <div className="startS">
        <button className="buttonS" onClick={startGame}>
          Start
        </button>
      </div>
      </div>
    </div>
  );
}

export default Snake;
