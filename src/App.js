import React, {Component} from 'react';
import './App.css';
import Home from './components/pages/Home';
import Card from './components/common/card/Card'
import Characters from './characters.json'


class App extends Component {

  state = {
    characters: Characters,
    selected: [],
    count: 0
  }


  
  render(){

    return (
      <div className="App">
        <Home>
          {this.state.characters.map(character => (
            <Card 
              id = {character.id}  
              name = {character.name}  
              image = {character.image}
              key = {character.id}  
            />

          ))}
        </Home>
      </div>
    );

  }
  
}

export default App;