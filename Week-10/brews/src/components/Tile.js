import React from 'react';

const Tile = (props) => {
  return (
    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='beer' src={props.imgurl} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Tile;