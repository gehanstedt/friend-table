import React from "react";

function FilterAndUsage(props) {
  const styling = {
    "font-size": "15px",
    "padding": "5px 5px 5px 5px"
  };

  console.log (`FilterAndUsage`);
  console.log (props);

  return (
    <table>
      <tbody>
        <tr>
          <td style={styling}>
            Welcome to Friend Table.  This is a static list of 100 'friends' that you can
            sort by ID, First Name, Last Name, Gender, City and Country.  Click once for
            ascending sort.  Click a second time for descending sort.  Lastly, you can filter 
            against the same items you can sort with the field.  Whatever you type, only cells
            matching those exactly will be displayed (ignoring case).
          </td>
          <td style={styling}>
            <input
              id="filter_input"
              onChange={(event) => props.handleFilterChange(event)}
              placeholder="Filter text" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default FilterAndUsage;