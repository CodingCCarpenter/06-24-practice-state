import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state={
      meaningOfLife: 47
    }
  }
handleClick = () => {
  this.setState((prevState, prevProps) => {
    return { meaningOfLife: prevState.meaningOfLife + 1}
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



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <button >
//           Update State
//         </button>
//       </header>
//     </div>
//   );
// }

// export default App;
