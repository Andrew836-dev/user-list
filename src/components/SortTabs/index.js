import React from "react";

function SortTabs(props) {
  return <button onClick={props.handleClick} id={props.name} className={
    props.sortedBy === props.name ?
    "btn btn-primary" :
    "btn btn-outline-primary"}>
      {props.name}
    </button>
}

export default SortTabs;