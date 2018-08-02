import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className="form" onSubmit={this.props.getBeers}>
        <button>SHOW ME ALL THE BEERS YOU GOT...</button>
      </form>
    );
  }
};

export default Form;