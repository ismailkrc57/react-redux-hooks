import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

const Navi = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Northwind</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options-{props.cart.length}
              </DropdownToggle>
              <DropdownMenu right>
                {props.cart.map((cart) => (
                  <DropdownItem>
                    {cart.product.name + " "}
                    <span
                      style={{
                        color: "blue",
                        fontSize: "17px",
                        fontWeight: "bolder",
                      }}
                    >
                      {cart.quantity}
                    </span>
                  </DropdownItem>
                ))}
                <DropdownItem divider />
                <DropdownItem>Go to Cart</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navi;
