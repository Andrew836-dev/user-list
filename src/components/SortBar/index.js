import React from "react";
import SortTabs from "../SortTabs";

const fieldList = [
  "ID",
  "Name",
  "Role",
  "Email",
]
function SortBar(props) {
  return <div className="btn-group">
    {fieldList.map(fieldName => <SortTabs name={fieldName} sortedBy={props.sortedBy} handleClick={props.handleClick} key={fieldName} />)}
  </div>
}

export default SortBar;