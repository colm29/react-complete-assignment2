import React, {Component} from 'react';
import './App.css';

import CharComponent from './CharComponent/CharComponent';
import ValidationComponent from './ValidationComponent/ValidationComponent';

class App extends Component{
  state = {
    lettersArray: []
  };

  popLetter = (boxIndex) => {
    const letters = [...this.state.lettersArray]
    letters.splice(boxIndex,1)
    this.setState({ lettersArray : letters})

  }

  handleChange = (event) => { 
    const newLetters = event.target.value.split('');

    this.setState({
      lettersArray : newLetters});
  }

render() {
  const letters= (
    <div>
      {this.state.lettersArray.map((letter, index) => {
        return <CharComponent 
        click={() => this.popLetter(index)}
        key={Math.round(Math.random() * 1000)}>{letter}</CharComponent>;
      })}
    </div>
      );

  return (
    <div>
      <input type="text" value={this.state.lettersArray.join('')} onChange={this.handleChange} />
      <p>{this.state.lettersArray.length}</p>
      <ValidationComponent
        textLength={this.state.lettersArray.length} />
      {letters}
    </div>
  )};
}

export default App;
