import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrementCount = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h2>
          Счетчик:
          {this.state.count}
        </h2>
        <button onClick={this.incrementCount}>
          Увеличить
        </button>
        <button onClick={this.decrementCount}>
          Уменьшить
        </button>
      </div>
    );
  }
}

export default Counter;