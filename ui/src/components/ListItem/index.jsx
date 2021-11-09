import React from 'react';
import './styles.css';
import 'bulma'

const ListItem = ({ kit }) => {
return (
  <table className="table center">
    <thead>
      <tr>
        <th></th>
        <th>ID</th>
        <th>Label</th>
        <th>Shipping Tracking Code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>🧪</th>
        <td>{kit.id}</td>
        <td>{kit.label_id}</td>
        <td>{kit.shipping_tracking_code}</td>
      </tr>
    </tbody>
  </table>
);
};
export default ListItem;
