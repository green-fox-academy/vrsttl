import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.getBeers}>
        Name of the beer: <input type='text' name='beername' placeholder='Type the name of the beer here...' />
        <br />
        {/* Type of the hops: <input type='text' name='hops' placeholder='Type the name of the hops here...' />
        <br />
        Type of the malt: <input type='text' name='malt' placeholder='Type the name of the malt here...' />
        <br />
        Which food you want to pair it with: <input type='text' name='foodpair' placeholder='Type the food you want to pair it with here...' />
        <br /> */}
        <button>Show me all the beers I want</button>
      </form>
    );
  }
};

export default Form;