import React, { Component } from 'react';
import './App.css';
import CompleteList from './CompleteList';
import TaskForm from './TaskForm';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a todo app", completed: true },
        { id: 3, text: "Profit", completed: false }
      ]
    }
  }

  addToList = (itemName) => {
    let index = {text: itemName, completed: false};
    this.setState({
        items: [...this.state.items, index],
        item: ""
    });
  }

  complete = (i) => {
    // alert("this is coming from App component", i);
    let g = [...this.state.items];
    g[i].completed = !g[i].completed;
    this.setState({completed: g});
  }

  render(){
    return (
      <div className="Dragon">
        <div className="jumbotron">
        <h1>Dojo To Do List</h1>
        </div>
        <br /><hr /><br />
        <TaskForm 
          addToList={this.addToList}
        />
        <br /><hr /><br />
        <CompleteList 
          items={this.state.items} 
          taskComplete={this.complete}
          />
      </div>
    );
  }
}

export default App;
