import React from "react";
import API from "../../API";
import SortBar from "../SortBar";

class Table extends React.Component {
  state = {
    sortedBy: "Name"
  }

  render(props) {
    return <div>
      <h1>Hello Table</h1>
      <SortBar sortedBy={this.state.sortedBy} handleClick={this.handleClick} />
      {this.getSortedUsers().map(user => {
        return (<p key={user.id}>{user.name} : {user.role} : {user.email}</p>)
      })}
    </div>
  }
  
  handleClick = event => {
    event.preventDefault();
    this.setState({sortedBy: event.target.id});
  }
  getSortedUsers = () => {
    return API.getUsers();
  }
}

export default Table;