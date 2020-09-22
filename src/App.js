import React, { Component } from 'react';
// import './App.css';
import TableContainer from './components/TableContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./API";
import { paginate, sortArray } from "./utils";

const headers = [
  "id",
  "firstName",
  "lastName",
  "role",
  "email",
]

class App extends Component {
  state = {
    sortedBy: "id",
    sortAscending: true,
    completeList: [],
    displayList: [],
    perPage: 10,
    currentPage: 1,
  }

  componentDidMount = () => {
    API.getUsers().then(list => {
      this.setState({
        completeList: list,
        displayList: list.slice()
      });
    });
  }

  render() {
    const { currentPage, perPage, displayList, sortedBy, sortAscending } = this.state;
    return (<>
      <div className="container">
      <header><nav className="nav"><h1>Header</h1></nav></header>
        <TableContainer
          displayData={paginate(displayList, currentPage, perPage)}
          sortedBy={sortedBy}
          sortAscending={sortAscending}
          headers={headers}
          sortClick={this.handleSortingClick} />
      </div>
      </>
    );
  }

  handleFilter = event => {
    
  }

  handleSortingClick = event => {
    const { sortedBy, sortAscending } = this.state;
    const newSortedBy = event.target.id;
    if (sortedBy !== newSortedBy) {
      this.sortUserList(newSortedBy, true)
      .then(sortedList => {
        this.updateUserList(sortedList, newSortedBy, true)
      });
    }
    else {
      this.sortUserList(sortedBy, !sortAscending)
      .then(sortedList => {
        this.updateUserList(sortedList, sortedBy, !this.state.sortAscending);
      });
    }
  }

  updateUserList = (newList, field = "id", sortAscending = true) => {
      this.setState({
        sortedBy: field,
        sortAscending: sortAscending,
        displayList: newList,
      });
  }

  sortUserList = async (field, sortAscending) => {
    return sortArray(this.state.displayList, field)
      .then(list => {
        if (!sortAscending) {
          list.reverse();
        }
        return list;
      });
  }

}

export default App;
