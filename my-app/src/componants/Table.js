
import React from 'react';
function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
         <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.Address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
