import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      item: "",
      items: [
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a todo app", completed: false },
        { id: 3, text: "Profit", completed: false }
      ]
    }
  }

  addToList = (e) => {
    e.preventDefault();
    if(this.state.item.length < 1) 
      return
    let index = {name: this.state.item, completed: false};
    this.setState({
        items: [...this.state.items, index],
        item: ""
    });
  }

  itemUpdate = (e) => {
    this.setState({item: e.target.value});
  }

  gotIt = (i) => {
    let items = [...this.state.items];
    items[i].completed = !items[i].completed;
    this.setState([items, i]);
  }

  render(){
    return (
      <div className="Dragon">
        <div className="jumbotron">
        <h1>Dojo To Do List</h1>
        </div>
        <br /><hr /><br />
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
        <br /><hr /><br />
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Completed?</th>
              <th>Item</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.items.map( (item, i) =>
              <tr key={i}>
                <td onClick={this.gotIt.bind(this, i)}>
                {
                  item.completed ?
                  <>
                  <input type="checkbox" defaultChecked /> &nbsp;
                  <span className="badge badge-success">Finished!</span> 
                  </>:
                  <>
                  <input type="checkbox" /> &nbsp;
                  <span className="badge badge-danger">Completed???</span>
                  </>
                }
                </td>
                <td>{item.text}</td>
              </tr>
              )
            }
          </tbody>

        </table>
      </div>
    );
  }
}

export default App;
