import React from "react";
import API from "../../API";
import SortBar from "../SortBar";
import Table from "../Table";

class TableContainer extends React.Component {
  state = {
    sortedBy: "ID",
    sortAscending: true,
    completeList: [],
    filteredList: []
  }

  componentDidMount = () => {
    this.updateUserList("ID");
  }

  render() {
    return <div>
      <h1>Hello Table</h1>
      <SortBar sortedBy={this.state.sortedBy} sortAscending={this.state.sortAscending} handleClick={this.sortClick} />
      <Table data={this.state.completeList} />
    </div>
  }

  sortClick = event => {
    event.preventDefault();
    if (this.state.sortedBy !== event.target.id) {
      this.updateUserList(event.target.id);
    }
    else {
      this.updateUserList(event.target.id, !this.state.sortAscending);
    }
  }

  updateUserList = async (field, sortAscending = true) => {
    this.getSortedUserList(field, sortAscending).then(list => {
      this.setState({ 
        sortedBy: field,
        sortAscending: sortAscending,
        completeList: list, 
        // filteredList: list.filter() 
      })
    });
  }

  getSortedUserList = async (field, sortAscending) => {
    return API.getUsersSortedBy(field.toLowerCase())
      .then(list => {
        if (!sortAscending) {
          list.reverse();
        }
        return list;
      });
  }

}

export default TableContainer;