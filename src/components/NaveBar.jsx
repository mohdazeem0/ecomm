import React, { useState, useEffect } from "react";
import { Nav, Form, Navbar } from "react-bootstrap";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { Cart } from "./Cart";
import { useSelector } from "react-redux";
import "../components/Style/NavBar.css";

export const NaveBar = () => {
  const products = useSelector((state) => state.productReducer.product);
  const cart = useSelector((state) => state.productReducer.cart);
  const [modalShow, setModalShow] = React.useState(false);
  const [prods, setProds] = useState([]);
  useEffect(() => {
    setProds([...products]);
  }, [products]);
  const catArr = [];
  {
    prods.map((item) => catArr.push(item.category));
  }
  const newArr = [...new Set(catArr)];
  return (
    <div>
      <Navbar className="fixed-nav" bg="light" expand="lg">
        <Navbar.Brand href="#" className="navbrnd">
          Redox.
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
            id="mainnav"
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <Nav.Link href="#action2">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Cart show={modalShow} onHide={() => setModalShow(false)} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
