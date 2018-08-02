import React from 'react';

class Tile extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick} id={this.props.id} className='tile tc bg-light-grey dib br3 pa3 ma2 grow bw2 shadow-5 w-30 h-25' >
        <img alt='beer' src={this.props.imgurl} />
        <div>
          <h2>{this.props.name}</h2>
          <p>{(this.props.selectedTile == this.props.id) ? this.props.description : null}</p>
        </div>
      </div>
    );
  }
}

export default Tile;