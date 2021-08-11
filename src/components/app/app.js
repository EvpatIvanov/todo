import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ToDoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends Component {

  maxKey = 1;

  state = {
    toDoData: [
      this.createToDoItem('Drink Coffee'),
      this.createToDoItem('Make Awesome App'),
      this.createToDoItem('Have a lunch')
    ]
  };

  createToDoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxKey++
    };
  }

  deleteItem = (id) => {
    this.setState(({toDoData}) => {
      const idx = toDoData.findIndex((el) => el.id === id);

      const newArray = [...toDoData.slice(0, idx), ...toDoData.slice(idx + 1)];
      //console.log('delete item with id', id);
      return {
        toDoData: newArray
      };
    });
  };

  addItem = (text) => {
    this.setState(({toDoData}) => {
      const newItemProps = this.createToDoItem(text);

      //console.log('add item with id', newItemProps.id);
      return {
        toDoData: [...toDoData, newItemProps]
      };

    });
  }

  toggleProperty(arr, id, property) {
    const idx = arr.findIndex((el) => el.id === id);

    const oldItem = arr[idx];
    const newItem = {...oldItem, [property]: !oldItem[property]};
    return( 
      [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)]
    );
  }

  onToggleImportant = (id) => {
    this.setState(({toDoData}) => {
      return({
        toDoData: this.toggleProperty(toDoData, id, 'important')
      });
    });
  };

  onToggleDone = (id) => {
    this.setState(({toDoData}) => {
      return({
        toDoData: this.toggleProperty(toDoData, id, 'done')
      });
    });
  };

  render() {
    const {toDoData} = this.state;
    const doneCount = toDoData.filter((el) => el.done).length;
    const toDoCount = toDoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={toDoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <ToDoList todos={toDoData} 
                  onDeleted={ this.deleteItem }
                  onToggleImportant={ this.onToggleImportant }
                  onToggleDone={ this.onToggleDone }/>

        <ItemAddForm onItemAdded={ this.addItem }/>
      </div>
    );
  }
  
};


   