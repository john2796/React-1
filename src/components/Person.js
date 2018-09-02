import React from "react";

const Person = ({ persons, deleteHandler, editNameHandler }) => {
  const todoList = persons.length ? (
    persons.map((person, index) => {
      return (
        <div className="colletion-item" key={person.id}>
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
