import React, { Component } from 'react';
import './App.css';
import Pageinfo from './components/Pageinfo';
import Form from './components/Form';
import Pagination from 'rc-pagination';
import TileList from './components/Tilelist'
import 'tachyons';


class App extends Component {
  state = {
    beerlist: [],
    change: 1,
  }

  getBeers = async (e) => {
    e.preventDefault();
    let punkURL = `https://api.punkapi.com/v2/beers?page=${this.state.change}&per_page=6`;
    const api_call = await fetch(punkURL);
    const responseData = await api_call.json();
    console.log(responseData);
    this.setState({ beerlist: responseData });
    console.log(this.state);
    return responseData;
  }

  getUpdatedBeers = async () => {
    let punkURL = `https://api.punkapi.com/v2/beers?page=${this.state.change}&per_page=6`;
    const api_call = await fetch(punkURL);
    const responseData = await api_call.json();
    console.log(responseData);
    this.setState({ beerlist: responseData });
    console.log(this.state);
    return responseData;
  }

  onChange = (page) => {
    console.log(page);
    this.setState({
      change: page,
    }, this.getUpdatedBeers);
  }

  render() {
    return (
      <div className="App">
        <Pageinfo />
        <Form getBeers={this.getBeers} />
        <TileList beers={this.state.beerlist} whichPage={this.state.change} />
        <Pagination onChange={this.onChange} current={this.state.change} total={120} pageSize={6} />
      </div>
    );
  }
}

export default App;
