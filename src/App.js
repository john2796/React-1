import React, { Component } from "react";
import "./App.css";

import Person from "./components/Person";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Janine", age: 28 },
      { id: 2, name: "Miranda", age: 22 },
      { id: 3, name: "Hello", age: 115 },
      { id: 4, name: "My", age: 115 },
      { id: 5, name: "named", age: 135 },
      { id: 6, name: "is", age: 315 },
      { id: 7, name: "pogi", age: 152 },
      { id: 8, name: "ako", age: 125 }
    ],
    showPersons: false
  };

  togglePersonHandler = () => {
    const showPersons = this.state.showPersons;

    this.setState({
      showPersons: !showPersons
    });
  };

  deletePersonsHandler = id => {
    const persons = this.state.persons.filter(person => {
      return person.id !== id;
    });

    this.setState({
      persons
    });
  };

  editNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons
    });
  };

  render() {
    //toggle this person
    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
          <p>Person name age and whatever</p>
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really Working</p>
        <button onClick={this.togglePersonHandler} className="btn btn-primary">
          Toggle paragraph
        </button>
        {person}
        <Person
          persons={this.state.persons}
          deleteHandler={this.deletePersonsHandler}
          editNameHandler={this.editNameHandler}
        />
      </div>
    );
  }
}

export default App;
