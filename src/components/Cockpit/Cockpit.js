import React from "react";
import classes from "../container/Cockpit.css";

const Cockpit = props => {
  let btnClass = classes.Button;
  if (props.showPerson) {
    btnClass = classes.red;
  }

  const assignedClasses = [];
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); //classes = ['red']
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm a React App</h1>
      <p className={assignedClasses.join(" ")}>This is really Working</p>
      <button className={btnClass} onClick={props.togglePersonHandler}>
        Toggle paragraph
      </button>
    </div>
  );
};

export default Cockpit;
