import React from "react";
import "./style.css";

function TableRow(props) {
// console.log (`---TableRow---`)
// console.log (props);
  const friend = props.friend;
  return (
    <tr>
      <td>
        {friend.id}
      </td>
      <td>
        <img alt={friend.first_name} src={friend.avatar} />
      </td>
      <td>
        {friend.first_name}
      </td>
      <td>
        {friend.last_name}
      </td>
      <td>
        {friend.email}
      </td>
      <td>
        {friend.gender}
      </td>
      <td>
        {friend.city}
      </td>
      <td>
        {friend.country}
      </td>
      <td>
        {friend.phone_number}
      </td>
    </tr>
  );
}

export default TableRow;
