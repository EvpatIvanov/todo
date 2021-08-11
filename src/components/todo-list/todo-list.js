import React  from "react";
import ToDoListItem from "../todo-list-item";
import './todo-list.css';

const ToDoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {
    const elements = todos.map(item => {
        return (
            <li key={item.id} className='list-group-item'>
              <ToDoListItem {...item} 
                  onDeleted={() => onDeleted(item.id)}
                  onToggleImportant={ () => onToggleImportant(item.id)}
                  onToggleDone={ () => onToggleDone(item.id)}/>
            </li>
        );
    });

    return (
      <ul className='list-group todo-list'>
        {elements}
      </ul>
    );
  };
  

export default ToDoList;