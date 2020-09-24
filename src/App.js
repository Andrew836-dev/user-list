import React from 'react';
import TableContainer from './components/TableContainer';
import SearchBar from "./components/SearchBar";
import PageSelect from "./components/PageSelect";
import PerPageSelect from "./components/PerPageSelect";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import API from "./API";
import { paginate, sortArray } from "./utils";

const headers = [
  "id",
  "firstName",
  "lastName",
  "phone",
  "email",
]

class App extends React.Component {
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
      if (list) {
        this.setState({
          completeList: list,
          displayList: list.slice()
        });
      }
    });
  }

  render() {
    const firstElement = (this.state.currentPage * this.state.perPage) - this.state.perPage + 1;
    const lastElement = (
      this.state.currentPage === Math.ceil(this.state.displayList.length / this.state.perPage) ? 
      this.state.displayList.length : 
      this.state.currentPage * this.state.perPage
    );
    return (<>
      <div className="container">
        <header><h3>User Directory</h3><SearchBar onChange={this.handleFilter} /></header>
        <TableContainer
          displayData={paginate(this.state.displayList, this.state.currentPage, this.state.perPage)}
          sortedBy={this.state.sortedBy}
          sortAscending={this.state.sortAscending}
          headers={headers}
          sortClick={this.changeSorting}
        />
        <nav>
          <div>
            Showing {firstElement} - {lastElement}. {" "}
            There are {this.state.displayList.length}/{this.state.completeList.length} visible entries after filter.
          </div>
          <PerPageSelect 
            value={this.state.perPage}
            onChange={this.changePerPage}
          />
          <PageSelect
            currentPage={this.state.currentPage}
            perPage={this.state.perPage}
            displayCount={this.state.displayList.length}
            changePage={this.changePage}
          />
        </nav>
      </div>
    </>
    );
  }

  handleFilter = event => {
    this.filterUserList(event.target.value)
      .then(filteredList => {
        if (!this.state.sortAscending) filteredList.reverse();
        this.setState({
          displayList: filteredList,
          currentPage: 1
        })
      });
  }

  changePerPage = event => {
    this.setState({
      currentPage: 1,
      perPage: parseInt(event.target.value)
    });
  }

  changePage = newPage => {
    const { currentPage } = this.state;
    if (currentPage === newPage) return;
    else this.setState({ currentPage: newPage });
  }

  changeSorting = event => {
    const { sortedBy, sortAscending } = this.state;
    const newSortedBy = event.target.id;
    let newSortAscending;
    if (sortedBy === newSortedBy) {
      newSortAscending = !sortAscending;
    } else {
      newSortAscending = true;
    }
    this.sortUserList(newSortedBy, newSortAscending)
      .then(sortedList => {
        this.setState({
          displayList: sortedList,
          sortedBy: newSortedBy,
          sortAscending: newSortAscending
        });
      });
  }

  filterUserList = async (term) => {
    const { completeList, sortedBy } = this.state
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
