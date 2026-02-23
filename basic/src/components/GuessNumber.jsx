import React, { useState, useEffect } from 'react';
import '../GuessNumber.css'
const GuessNumberGame = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [guessHistory, setGuessHistory] = useState([]);

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    const newNumber = Math.floor(Math.random() * 100) + 1;
    setRandomNumber(newNumber);
    setGuess('');
    setMessage('I\'m thinking of a number between 1 and 100. Can you guess it?');
    setAttempts(0);
    setGameOver(false);
    setGuessHistory([]);
    console.log('Secret number:', newNumber); // For testing
  };

  const handleGuess = (e) => {
    e.preventDefault();
    
    const guessedNumber = parseInt(guess);
    
    if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
      setMessage('❌ Please enter a valid number between 1 and 100!');
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    
    // Add to guess history
    setGuessHistory(prev => [...prev, {
      guess: guessedNumber,
      result: guessedNumber === randomNumber ? 'correct' : guessedNumber < randomNumber ? 'low' : 'high'
    }]);

    if (guessedNumber === randomNumber) {
      setMessage(`🎉 Congratulations! You guessed the number in ${newAttempts} attempts!`);
      setGameOver(true);
    } else if (guessedNumber < randomNumber) {
      setMessage('📈 Too low! Try a higher number.');
    } else {
      setMessage('📉 Too high! Try a lower number.');
    }

    setGuess('');
  };

  return (
    <div className="game-container">
      <h1>🎯 Number Guessing Game</h1>
      
      <div className="game-info">
        <p>Attempts: <strong>{attempts}</strong></p>
      </div>

      <form onSubmit={handleGuess} className="guess-form">
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Enter your guess (1-100)"
          maxLength={}
          min="1"
          max="100"
          disabled={gameOver}
          className="guess-input"
        />
        <button 
          type="submit" 
          disabled={gameOver}
          className="guess-button"
        >
          Submit Guess
        </button>
      </form>

      <div className={`message ${gameOver ? 'success' : ''}`}>
        {message}
      </div>

      {guessHistory.length > 0 && (
        <div className="guess-history">
          <h3>Guess History:</h3>
          <div className="history-list">
            {guessHistory.map((item, index) => (
              <div 
                key={index} 
                className={`history-item ${item.result}`}
              >
                Guess {index + 1}: <strong>{item.guess}</strong> 
                ({item.result === 'correct' ? '🎯 Correct!' : item.result === 'low' ? '📈 Too low' : '📉 Too high'})
              </div>
            ))}
          </div>
        </div>
      )}

      {gameOver && (
        <button onClick={startNewGame} className="new-game-button">
          🆕 Play Again
        </button>
      )}
    </div>
  );
};

export default GuessNumberGame;