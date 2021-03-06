import React from "react";
import { useDispatch } from "react-redux";
import { Row, Col, Card, Button, Form, Image } from "react-bootstrap";
import "../components/Style/Card.css";

export const Productitem = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <Card className="product" id="maincard">
      <Row>
        <Card.Title>{item.title}</Card.Title>
      </Row>
      <Row>
        <Image src={`${item.image}`} width="80px" height="260px"></Image>
      </Row>
      <Row>
        <Form.Label>${item.price}</Form.Label>
      </Row>
      <Card>
        <Row>
          <Col>
            <Button
              variant="dark"
              onClick={() =>
                dispatch({
                  type: "ADD_TO_CART",
                  data: item,
                })
              }
            >
              Add to cart
            </Button>
          </Col>
        </Row>
      </Card>
    </Card>
  );
};
