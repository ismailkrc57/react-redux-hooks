import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    curentCategory: "",
    products: [],
    cart: [],
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
    this.getProducts(category.id);
  };

  addToCart = (product) => {
    let newCart = this.state.cart;
    var addItem = newCart.find((c) => c.product.id === product.id);
    if (addItem) {
      addItem.quantity += 1;
    } else {
      newCart.push({ product: product, quantity: 1 });
    }

    this.setState({ cart: newCart });
  };

  render() {
    let productInfo = { title: "productList" };
    let categoryInfo = { title: "categorylist" };
    return (
      <div className="App">
        <Container>
          <Navi cart={this.state.cart} />

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
                addToCart={this.addToCart}
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
