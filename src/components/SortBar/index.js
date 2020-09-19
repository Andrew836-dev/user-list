import React from "react";
import SortTabs from "../SortTabs";

function SortBar(props) {
  return <div className="btn-group">
    <SortTabs tabName="Name" sortedBy={props.sortedBy} handleClick={props.handleClick} />
    <SortTabs tabName="Role" sortedBy={props.sortedBy} handleClick={props.handleClick} />
  </div>
}

export default SortBar;