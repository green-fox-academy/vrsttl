import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
      <input type='text' name='beername' placeholder='Type the name of the beer here...'/>
      <input type='text' name='hops' placeholder='Type the name of the hops here...'/>
      <input type='text' name='malt' placeholder='Type the name of the malt here...'/>
      <input type='text' name='foodpair' placeholder='Type the food you want to pair it with here...'/>
      </form>
    );
  }
};

export default Form;