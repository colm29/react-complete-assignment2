import React, {Component} from 'react';
import './App.css';

import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component{
  state = {
    stringValue: '',
    l: 0
  }

  popLetter = (event) => {
    console.log(event.target.value);
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
  const letters= (
    <div>
      {this.state.stringValue.split('').map((letter) => {
        return <CharComponent 
        click={this.popLetter}>{letter}</CharComponent>;
      })}
    </div>
      );
 

   
  return (
    <div>
      <input type="text" onChange={this.outputLength} />
      <p>{this.state.l}</p>
      <ValidationComponent
        textLength={this.state.l} />
      {letters}
    </div>
  )};
}

export default App;
