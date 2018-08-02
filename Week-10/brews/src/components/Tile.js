import React from 'react';

const Tile = (props) => {
  return (
    <div className='tile tc bg-light-grey dib br3 pa3 ma2 grow bw2 shadow-5 w-30 h-25'>
      <img alt='beer' src={props.imgurl} />
      <div>
        <h2>{props.name}</h2>
        <p>{(props.isSelected) ? props.description : ''}</p>
      </div>
    </div>
  );
}

export default Tile;