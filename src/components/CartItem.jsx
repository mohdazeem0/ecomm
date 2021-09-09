// import React from "react"
// import { useDispatch } from "react-redux"
// import { Row, Col, Card, Button, Form, Image } from "react-bootstrap"

// export const CartItem= ({item}) =>{
//     const dispatch = useDispatch();
//     return(
//         <Card className="product">
//             <Row>
//                 <Card.Title>{item.title}</Card.Title>
//             </Row>
//             <Row>
//                 <Image
//                     src={`${item.image}`}
//                     width="100px"
//                     height="300px"
//                 >

//                 </Image>
//             </Row>
//             <Row><Form.Label>${item.price}</Form.Label></Row>
//             <Card>
//              <Row>
//                  <Col>
//                     <Button variant="dark" onClick={()=>
//                     dispatch({
//                         type: "ADD_TO_CART" ,
//                         data: item,
//                     })
//                     }>+</Button>
//                     <Button variant="dark" onClick={()=>
//                     dispatch({
//                         type: "ADD_TO_CART" ,
//                         data: item,
//                     })
//                     }>-</Button>
//                  </Col>
                 
//              </Row>
//              </Card>
             
//         </Card>

//     )
// }