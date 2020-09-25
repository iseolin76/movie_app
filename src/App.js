import React from 'react';
import propTypes from "prop-types";

class App extends React.Component{
  state = {
    count: 0
  };
  add = () => {
    this.setState(curret => ({count: curret.count +1}));
  };
  minus = () => {
    this.setState(curret => ({count: curret.count -1}));
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    )
  }
}

export default App;