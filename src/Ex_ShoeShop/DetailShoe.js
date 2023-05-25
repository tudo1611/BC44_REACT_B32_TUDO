import React, { Component } from "react";

export default class DetailShoe extends Component {
  render() {
    let { name, price, description, quantity } = this.props.detail;
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">{name}</td>
              <td>{price}</td>
              <td>{description}</td>
              <td>{quantity}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
