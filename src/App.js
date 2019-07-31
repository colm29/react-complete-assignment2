import React, {Component} from 'react';
import './App.css';

import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component{
  state = {
    stringValue: '',
    l: 0
  }

  outputLength = (event) => { 
    const strVal = event.target.value;
    const l = strVal.length;

    this.setState({
      stringValue: strVal,
      l: l
    });
  }

render() {
  letters = (
    <div>
      {this.state.stringValue.split('').map}
    </div>
  )
  return (
    <div>
      <input type="text" onChange={this.outputLength} />
      <p>{this.state.l}</p>
      <ValidationComponent
        textLength={this.state.l} />
    </div>
  )};
}

export default App;
