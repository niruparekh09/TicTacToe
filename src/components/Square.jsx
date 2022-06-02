import React from 'react';

const Square = props => {
  return (
    <button type="button" className="square">
      {props.id}
    </button>
  );
};

export default Square;
