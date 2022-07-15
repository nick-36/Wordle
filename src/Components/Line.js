import React from "react";

function Line({ guess, isFinal, solution }) {
  let tiles = [];
  const WORD_LENGTH = 5;

  for (let i = 0; i < WORD_LENGTH; i++) {
    const char = guess[i];

    let className = ` tile `;
    if (isFinal) {
      if (char === solution[i]) {
        className += " correct";
      } else if (solution.includes(char)) {
        className += " close";
      } else {
        className += " inCorrect";
      }
    }

    tiles.push(
      <div key={i} className={className}>
        {char}
      </div>
    );
  }
  return <div className="line">{tiles}</div>;
}

export default Line;
