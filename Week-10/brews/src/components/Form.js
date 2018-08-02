import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="form" onSubmit={this.props.getBeers}>
        <button>Show me all the beers I want</button>
      </form>
    );
  }
};

export default Form;