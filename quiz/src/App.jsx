import React, { useState } from 'react';
import "./App.css";
import { questions } from './Question';

const App = () => {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showNext, setShowNext] = useState(false);

  const handleClick = (isCorrect, index) => {
    setSelected(index);
    setShowNext(true);
  };

  const handleNext = () => {
    setCount(count + 1);
    setSelected(null);
    setShowNext(false);
  };

  return (
    <div>
      <div className='qz'>
        <h1 className='title'>Sample quiz</h1>
        <div id="question">{questions[count].question}</div>
        <div id="answer">
          {questions[count].answers.map((answer, index) => (
            <button
              key={index}
              className='btn'
              onClick={() => handleClick(answer.correct, index)}
              style={{
                backgroundColor:
                  selected === index
                    ? answer.correct
                      ? 'green'
                      : 'red'
                    : '',
                color: selected === index ? 'white' : '',
                pointerEvents: selected !== null ? 'none' : 'auto'
              }}
            >
              {answer.text}
            </button>
          ))}
        </div>

        {showNext && (
          <button onClick={handleNext} id='next-btn'>Next</button>
        )}
      </div>
    </div>
  );
};

export default App;
