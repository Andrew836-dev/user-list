import React from "react";

function PageSelect(props) {

  const totalPages = Math.ceil(props.displayCount / props.perPage);
  const isFirstPage = (props.currentPage === 1);
  const isLastPage = (props.currentPage === totalPages || props.displayCount === 0);

  const output = [];
  if (!isFirstPage) {
    output.push(<li key={`pageFirst`} className="nav-item" onClick={() => props.changePage(1)}><p className="nav-link">{`⏮`}</p></li>);
    output.push(<li key={`pagePrev`} className="nav-item" onClick={() => props.changePage(props.currentPage - 1)}><p className="nav-link">{`⏪`}</p></li>);
  }
  for (let i = 0; i < totalPages; i++) {
    output.push(
      <li
        key={`page${i + 1}`} 
        className="nav-item" 
        onClick={() => props.changePage(i + 1)}
      >
        <p className={(i + 1 === props.currentPage?`nav-link active`:`nav-link`)}>{i + 1}</p>
      </li>)
  }
  if (!isLastPage) {
    output.push(<li key={`pageNext`} className="nav-item" onClick={() => props.changePage(props.currentPage + 1)}><p className="nav-link">{`⏩`}</p></li>);
    output.push(<li key={`pageLast`} className="nav-item" onClick={() => props.changePage(totalPages)}><p className="nav-link">{`⏭`}</p></li>);
  }
  return <ul className="nav nav-tabs">{output}</ul>;
}


export default PageSelect