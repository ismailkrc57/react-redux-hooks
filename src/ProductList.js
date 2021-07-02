import React, { Component } from "react";
import { Table } from "reactstrap";

export default class Productlist extends Component {

  
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.curentCategory}
        </h3>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Unit In Stock</th>
              <th>Unit Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.unitsInStock}</td>
                <td>{product.unitPrice}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
