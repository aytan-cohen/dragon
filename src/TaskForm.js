import React, { Component } from 'react';
import './App.css';

class TaskForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
        item: "",
      }
    }
    
    itemUpdate = (e) => {
      this.setState({item: e.target.value});
    }
  
    addToList = (e) => {
      e.preventDefault();
      if(this.state.item.length < 1) 
        return
      this.props.addToList(this.state.item);
      this.setState({item: ""});
    }
  
    render() {
      return (
        <form onSubmit={this.addToList}>
        <div className="form-group">
          <label>To Do List:
          <input 
            className="form-control" 
            type="text" 
            name="item"
            value={this.state.item}
            onChange={this.itemUpdate}
            />
          </label>
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
      );
    }
  
  }

export default TaskForm;