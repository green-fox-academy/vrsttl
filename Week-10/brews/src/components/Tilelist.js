import React from 'react';
import Tile from './Tile';

const TileList = (props) => {
  return (
    <div>
      { 
        props.beers.map((element, i) => {
          return (
            <Tile
              key={i}
              name={element.name}
              imgurl={element.image_url}
              description={element.description}
            />
          );
        })
      }
    </div>
  );
}

export default TileList;