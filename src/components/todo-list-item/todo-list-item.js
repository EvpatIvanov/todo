import React, {Component}  from "react";
import './todo-list-item.css';
//import './fontawesome.min.css';


export default class ToDoListItem extends Component {
  
  render() {

    const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

    let classNames = 'todo-list-item';
    if(done) {
      classNames += ' done';
    }

    if(important) {
      classNames += ' important';
    }
  
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          onClick={onToggleDone} >
          {label}
        </span>
  
        <button type="button"
                className="btn btn-outline-success btn-sm float-end"
                onClick={onToggleImportant}>
          <i className="fas fa-exclamation"></i>
        </button>
  
        <button type="button"
                className="btn btn-outline-danger btn-sm float-end"
                onClick={onDeleted}>
          <i className="fa fa-trash"></i>
        </button>
      </span>
    );
  }
}

