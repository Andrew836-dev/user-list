import React from "react";
import API from "../../API";
import SortBar from "../SortBar";
import Table from "../Table";

class TableContainer extends React.Component {
  state = {
    sortedBy: "Name",
    sortAscending: true,
    list: [{ id: 0, name: "table", role: "information", email: "testEmail" }]
  }

  componentDidMount = () => {
    this.updateUserList();
  }

  render() {
    return <div>
      <h1>Hello Table</h1>
      <SortBar sortedBy={this.state.sortedBy} sortAscending={this.state.sortAscending} handleClick={this.handleClick} />
      <Table data={this.state.list} />
    </div>
  }

  handleClick = event => {
    event.preventDefault();
    if (this.state.sortedBy !== event.target.id) {
      this.setState({ sortedBy: event.target.id });
      console.log("changed sort type");
    }
    else {
      this.setState({sortAscending: !this.state.sortAscending})
      console.log("changed sort order");
    }
    this.updateUserList();
  }

  updateUserList = async () => {
    this.getSortedUserList().then(list => {
      this.setState({ list: list })
    });
  }

  getSortedUserList = async () => {
    return API.getUsersSortedBy(this.state.sortedBy.toLowerCase())
      .then(list => {
        if (!this.state.sortAscending) {
          list.reverse();
        }
        return list;
      });
  }

}

export default TableContainer;