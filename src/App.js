import React, { Component } from "react";
import "./App.css";
import Table from "./Table.js";
import Form from "./Form.js";

class App extends Component {
  state = {
    characters: []
  };
  
  //Function to remove a Character
  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index;
      })
    });
  };

  //Function to Handle Submission of Data
  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
  }

  //Render
  render() {
    const { characters } = this.state;
    return (
      <div className="container">
        <Table
          characterData={characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
