import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <div className="text-white">
      <div className="status-message">
        {winner && (
          <div>
            Winner is{' '}
            <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
              {winner}
            </span>
          </div>
        )}
        {!winner &&
          !noMovesLeft &&
          `Next player is ${current.isXNext ? 'X' : 'O'}`}
        {!winner && noMovesLeft && (
          <div>
            X and O <span className="text-tied"> tied</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default StatusMessage;
