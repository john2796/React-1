import React from "react";
import classes from "../container/Person.css";

const Person = ({ persons, deleteHandler, editNameHandler }) => {
  const todoList = persons.length ? (
    persons.map((person, index) => {
      return (
        <div key={person.id} className={classes.Person}>
          <p
            onClick={() => {
              deleteHandler(person.id);
            }}
          >
            Hi my Name is {person.name} and I'm {person.age} years old ...
          </p>
          <input
            type="text"
            placeholder="change text here . . "
            onChange={event => {
              editNameHandler(event, person.id);
            }}
          />
        </div>
      );
    })
  ) : (
    <p> You have no todo's left, yay ! </p>
  );

  return (
    <div>
      <span> {todoList} </span>
    </div>
  );
};

export default Person;
