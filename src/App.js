import React, {Component} from 'react';
import './App.css';
import Home from './components/pages/Home';
import Card from './components/common/card/Card'
import Characters from './characters.json'
import Header from './components/header/Header';


class App extends Component {

  state = {
    characters: Characters,
    selected: [],
    score: 0,
    highScore: 0,
    message: ''    
  }

  randomize = characterArr => {
    for (let i = characterArr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [characterArr[i], characterArr[j]] = [characterArr[j], characterArr[i]];
    }
    return characterArr;
  };

  handleClick = id => {
    if (this.state.selected.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ selected: this.state.selected.concat(id) });
    } else {
      this.handleGameover();
    }
  };

  handleIncrement = () => {
    const updatedScore = this.state.score + 1;
    this.setState({
      score: updatedScore,
      message: ""
    });
    if (updatedScore >= this.state.highScore) {
      this.setState({ highScore: updatedScore });
    }
    if (updatedScore === 12) {
      this.setState({ message: "You got them all!! Great work!" });
    }
    this.handleRandomize();
  };

  handleGameover = () => {
    this.setState({
      characters: Characters,
      selected: [],
      score: 0,
      highScore: this.state.highScore,
      message: 'Game Over! Try again :)' 
    });
    this.handleRandomize();
  };

  handleRandomize = () => {
    let randomCharacters = this.randomize(Characters);
    this.setState({ characters: randomCharacters });
  };
  
  render(){

    return (
      <div className="App">
        <Header 
          message = {this.state.message}
          score = {this.state.score}
          highScore = {this.state.highScore}
        />
        <Home>
          {this.state.characters.map(character => (
            <Card 
              id = {character.id}  
              name = {character.name}  
              image = {character.image}
              key = {character.id}
              handleClick = {this.handleClick}
              handleIncrement = {this.handleIncrement}
              handleRandomize = {this.handleRandomize}
              handleGameover = {this.handleGameover}
            />
          ))}
        </Home>
      </div>
    );

  }
  
}

export default App;