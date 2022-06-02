import React from 'react';

const Square = props => {
  return (
    <button type="button" className="square" onClick={props.onClick}>
      {props.id}
    </button>
  );
};

export default Square;
