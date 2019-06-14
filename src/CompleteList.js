import React, { Component } from 'react';
import './App.css';

class CompleteList extends Component {
    constructor(props){
      super(props);
      console.log("I'm not useless")
    }
  
    gotIt = (i) => {
      this.props.taskComplete(i);
    }
  
    render() {
      return(
        <table className="table table-striped">
            <thead>
              <tr>
                <th>Completed?</th>
                <th>Item</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.items.map( (item, i) =>
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
      )
    }
  
  }

export default CompleteList;