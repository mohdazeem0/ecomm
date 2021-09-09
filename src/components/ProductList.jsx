import React, {useState, useEffect}  from "react"
import { useSelector } from "react-redux"
import { Card, Row, Col } from "react-bootstrap"
import { Productitem } from "./Productitem"

export const ProductList=({searchTxt})=>{
    const myProducts = useSelector((state)=> state.productReducer.product);
    const [prods, setProds] = useState([]);
    useEffect(()=>{
    setProds([...myProducts]);
    },[myProducts])
    useEffect(()=>{
        if (searchTxt !== ""){
        const filterProducts = 
        myProducts.filter((item)=>item.title.toUpperCase().includes(searchTxt.toUpperCase()));
        setProds([...filterProducts]);
        }
    },[searchTxt])
    return(
        <div>
        <Card className="productlist">
        <Row>
            {prods.map((item)=>(
            <Col md={3}><Productitem item={item}/></Col>
            ))}
        </Row>
        </Card>
        </div>
    )
}