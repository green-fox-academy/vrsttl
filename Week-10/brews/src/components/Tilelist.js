import React from 'react';
import Tile from './Tile';

class TileList extends React.Component {
  state = {
    selectedTile: 0
  }

  onClick = (e) => {
    console.log(e.target)
    this.setState({ selectedTile: e.target.props.id });
  }

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
                selectedTile={this.state.selectedTile}
                id={element.id}
                onClick={this.onClick}
              />
            );
          })
        }
      </div>
    );
  }
};

export default TileList;