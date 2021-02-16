import React from "react";
import HeaderRow from "../HeaderRow"
import TableRow from "../TableRow"
// import "./style.css";

function BuildTable(props) {
// console.log (`---BuildTable - props`)
// console.log (props);
//console.log (props.children);

  const styling = {
    "font-size": "15px",
    "margin-left": "5px",
    "margin-bottom": "30px"
  };

  return (
    <table style={styling} className="table table-bordered table-striped">
      <HeaderRow
        handleSortBy={props.handleSortBy} 
      />
      <tbody>
        {props.friends.map(friend => (
          <TableRow
            friend={friend}
          />))}
      </tbody>
    </table>
  );
}

export default BuildTable;