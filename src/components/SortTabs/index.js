import React from "react";

function SortTabs(props) {
  return <button onClick={props.handleClick} id={props.tabName} className={
    props.sortedBy === props.tabName ?
    "btn btn-primary" :
    "btn btn-outline-primary"}>
      {props.tabName}
    </button>
}

export default SortTabs;