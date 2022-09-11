import React from "react";

type CounterState = {
  count: number;
}

export class Counter extends React.Component<Record<string, never>, CounterState> {
  override state = {
    count: 0
  }

  private increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  private decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  override render() {
    return(
      <>
        <p>
          Count: {this.state.count}
        </p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </>
    )
  }
}
