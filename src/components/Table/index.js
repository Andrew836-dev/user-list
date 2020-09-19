import React from "react";
import API from "../../API";

class Table extends React.Component {
  state = {
    sortedBy: "Name"
  }

  render(props) {
    return <div>
      <h1>Hello Table</h1>
      {API.getUsers().map(user => {
        return (<p>{user.name} : {user.role} : {user.email}</p>)
      })}
    </div>
  }
}

export default Table;