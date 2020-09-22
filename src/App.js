import React, { Component } from 'react';
// import './App.css';
import TableContainer from './components/TableContainer';
import SearchBar from "./components/SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import API from "./API";
import { paginate, sortArray } from "./utils";

const headers = [
  "id",
  "firstName",
  "lastName",
  "phone",
  "email",
]

class App extends Component {
  state = {
    sortedBy: "id",
    sortAscending: true,
    filter: "",
    completeList: [],
    displayList: [],
    perPage: 10,
    currentPage: 1,
  }

  componentDidMount = () => {
    API.getUsers().then(list => {
      console.log(list);
      if (list) {
        this.setState({
          completeList: list,
          displayList: list.slice()
        });
      }
    });
  }

  render() {
    const { currentPage, perPage, displayList, sortedBy, sortAscending } = this.state;
    return (<>
      <div className="container">
        <header><nav className="nav"><h1>Header</h1></nav><SearchBar onChange={this.handleFilter} /></header>
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
    this.filterUserList(event.target.value)
      .then(filteredList => {
        if (!this.state.sortAscending) filteredList.reverse();
        this.updateUserList(filteredList, this.state.sortedBy, this.state.sortAscending);
      });
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
          this.updateUserList(sortedList, sortedBy, !sortAscending);
        });
    }
  }

  updateUserList = (newList, field = "id", sortAscending = true) => {
    this.setState({
      displayList: newList,
      sortedBy: field,
      sortAscending: sortAscending,
    });
  }

  filterUserList = async (term) => {
    const { completeList, sortedBy} = this.state
    return sortArray(completeList, sortedBy)
      .then(sortedList => sortedList.filter(employee => {
      return headers.some(header => {
        return employee[header].toString().toLowerCase().includes(term.toLowerCase())
      });
    }));
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
