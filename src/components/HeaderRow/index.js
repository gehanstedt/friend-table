import React from "react";
import "./style.css";

const styling = {
  "padding-left": "9px",
  "padding-right": "9px"
}

function TableRow(props) {
  return (
    <thead>
      <tr>
        <th>
          <span className="clickable" onClick={() => props.handleSortBy("id")}>ID</span>
        </th>
        <th>
          Avatar
        </th>
        <th style={styling}>
          <span className="clickable" onClick={() => props.handleSortBy("firstName")}>First Name</span>
        </th>
        <th style={styling}>
          <span className="clickable" onClick={() => props.handleSortBy("lastName")}>Last Name</span>
        </th>
        <th>
          Email Address
        </th>
        <th>
          <span className="clickable" onClick={() => props.handleSortBy("gender")}>Gender</span>
        </th>
        <th>
        <span className="clickable" onClick={() => props.handleSortBy("city")}>City</span>
        </th>
        <th>
          <span className="clickable" onClick={() => props.handleSortBy("country")}>Country</span>
        </th>
        <th>
          Phone Number
        </th>
      </tr>
    </thead>
  );
}

export default TableRow;
