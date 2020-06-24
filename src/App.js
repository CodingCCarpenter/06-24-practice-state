import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      meaningOfLife: 47 + this.props.increment
    }
    this.props = props
  }
  handleClick = () => {
    this.setState((prevState, prevProps) => {
      return { meaningOfLife: prevState.meaningOfLife + prevProps.increment}
    })
  }
  render () {
    return (
      <div>
        <p>
          The meaning of life is {this.state.meaningOfLife}
        </p>
        <button onClick={this.handleClick}>
          Update State
        </button>
      </div>
    )
  }
}

export default App

