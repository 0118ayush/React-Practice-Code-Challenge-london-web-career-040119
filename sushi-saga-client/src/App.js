import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"


class App extends Component {


  state = {
    sushis: [],
    sushiIndex: 0, 
    wallet: 50, 
    eatenSushis: []
  }

  componentDidMount(){
    fetch(API).then(resp => resp.json())
    .then(sushis => this.setState({
      sushis: sushis
    }))
  }

  eatenSushis=(sushi)=>{
    if(this.state.wallet >= sushi.price){
      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushi]
      })
      this.setState({
        wallet: this.state.wallet - sushi.price
      })
      return true
    } else{
      return false
    }
  }


  shiftSushis=()=>{
    return this.state.sushis.slice(this.state.sushiIndex, this.state.sushiIndex + 4)
  }

  moreSushisEvent=()=>{
    this.setState({
      sushiIndex: this.state.sushiIndex + 4
    })
  }


  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.shiftSushis()} moreSushisHandler={this.moreSushisEvent} eatenSushis={this.eatenSushis} eatenSushisState={this.state.eatenSushis}/>
        <Table wallet={this.state.wallet} eatenSushiArray={this.state.eatenSushis} />
      </div>
    );
  }
}

export default App;

// Sushi list is properly received from the server -- 
// Only 4 sushi are rendered at a time ---
// Clicking the "More Sushi!" button shows the next set of 4 sushi in the list. For this assignment, you don't have to be concerned about what happens when you reach the end of the sushi list.----
// Clicking a sushi on a plate will eat the sushi, causing it to be removed from its plate and an empty plate to appear on the table.
// We need to make money! Whenever a sushi is eaten, customers should be automatically charged! Based on a budget decided by you, the developer, the amount of money remaining should go down by the cost of the sushi that was eaten. There is a spot to display this number in the Table component--
// No free meals! Customers cannot eat any sushi that exceeds the amount of money remaining in their balance--