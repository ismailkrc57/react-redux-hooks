import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    curentCategory: "",
    products: [],
  };

  componentDidMount() {
    this.getProducts();
  }
  getProducts = (categoryId) => {
    let url = "https://northwind.vercel.app/api/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  changeCategory = (category) => {
    this.setState({ curentCategory: category.name });
    this.getProducts(category.id)
  };

  render() {
    let productInfo = { title: "productList" };
    let categoryInfo = { title: "categorylist" };
    return (
      <div className="App">
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                curentCategory={this.state.curentCategory}
                changeCategory={this.changeCategory}
                getProducts={this.getProducts}
                info={categoryInfo}
              />
            </Col>
            <Col xs="9">
              <ProductList
                products={this.state.products}
                curentCategory={this.state.curentCategory}
                info={productInfo}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
