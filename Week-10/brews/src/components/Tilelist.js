import React from 'react';
import Tile from './Tile';


class TileList extends React.Component {
 /* propsChangedBeerUpdate = () => {
    let currentSelected = this.isSelected;
    (currentSelected) ? currentSelected = false : currentSelected = true;
    this.updateBeers;
  }*/
  render() {
    return (
      <div>
        {
          this.props.beers.map((element, i) => {
            return (
              <Tile
                key={i}
                name={element.name}
                imgurl={element.image_url}
                description={element.description}
                isSelected={false}
                //onClick={this.propsChangedBeerUpdate()}
              />
            );
          })
        }
      </div>
    );
  }
};
/*
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
              isSelected={false}
              onClick={() => { (props.isSelected) ? props.isSelected = false : props.isSelected = true }}
            />
          );
        })
      }
    </div>
  );
}
*/
export default TileList;