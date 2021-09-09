import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, Card, Row, Col, Image } from "react-bootstrap";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

export const Cart = (props) => {
  const cart = useSelector((state) => state.productReducer.cart);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // console.log("cart---->", cart);
  return (
    <>
      <Button variant="light" onClick={handleShow}>
        <AddShoppingCartIcon />
        <sup>{cart.length}</sup>
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{cart.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.map((item) => (
            <Row>
              <Col md={3}>
                <Image src={item.image} style={{ width: "50px" }}></Image>{" "}
              </Col>
              <Col md={3}>{item.title}</Col>
              <Col md={3}>{item.price}</Col>
              <Col md={3}>{item.category}</Col>
            </Row>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
