import React, { Component } from "react";
import classes from "./components/container/App.css";

import Person from "./components/Person/Person";
import Cockpit from "./components/Cockpit/Cockpit";
import Example from "./components/Example";

class App extends Component {
  constructor(props) {
    super(props);

    console.log("[App.js] Inside constructor", props);
  }

  componentDidMount() {
    console.log("[App.js] Inside componentDidMount()");
  }

  componentWillMount() {
    console.log("[App.js] Inside componentWillMount()");
  }

  componentWillReceiveProps() {
    console.log("update person.js Inside ComponentWill Recieve props");
  }

  state = {
    persons: [
      { id: 1, name: "Janine", age: 28 },
      { id: 2, name: "Miranda", age: 22 },
      { id: 3, name: "Hello", age: 115 }
    ],
    showPersons: false,
    on: false,
    toggleClicked: 0
  };

  togglePersonHandler = () => {
    const showPersons = this.state.showPersons;

    this.setState((prevState, props) => {
      return {
        showPersons: !showPersons,
        toggleClicked: prevState.toggleClicked + 1
      };
    });
    console.log(this.state);
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
    console.log("render");
    //toggle this person
    let person = null;
    if (this.state.showPersons) {
      person = (
        <div>
          <Person
            persons={this.state.persons}
            deleteHandler={this.deletePersonsHandler}
            editNameHandler={this.editNameHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <button onClick={() => this.setState({ on: !this.state.on })}>
          {this.state.on === true ? `open` : `close`}
          {this.state.on === true ? ` + ` : ` - `}
        </button>
        <Cockpit
          persons={this.state.persons}
          showPerson={this.state.showPersons}
          togglePersonHandler={this.togglePersonHandler}
        />
        {person}
        <Example person={this.state.person} />
      </div>
    );
  }
}

export default App;
