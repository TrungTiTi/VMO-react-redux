import React from 'react'

type MyState = {
  count: number;
};

class ClassComponent extends React.Component <{}, MyState> {
  state:MyState = {
    count: 0
  };
  
    render() {
      return (
        <div>
          <h1>This is class component</h1>
          <p>Count {this.state.count} </p>
          <button onClick={() => this.setState( {count: this.state.count + 1 })}>
            +
          </button>
          <button onClick={() => this.setState({ count: this.state.count - 1 })}>
            -
          </button>
        </div>
      );
    }
  }
  
  export default ClassComponent;