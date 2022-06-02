import React from 'react';
import Square from './Square';

const Board = () => {
  return (
    <div className="board">
      <div className="board-row">
        <Square id="1a" />
        <Square id="1b" />
        <Square id="1c" />
      </div>
      <div className="board-row">
        <Square id="2a" />
        <Square id="2b" />
        <Square id="2c" />
      </div>
      <div className="board-row">
        <Square id="3a" />
        <Square id="3b" />
        <Square id="3c" />
      </div>
    </div>
  );
};

export default Board;
