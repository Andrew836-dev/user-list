import React from "react";

function Table(props) {
  return props.data.map(user => (<p key={user.id}>{user.name} : {user.role} : {user.email}</p>))
}

export default Table;