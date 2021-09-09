import axios from "axios";

export const getCart= async ()=>{
    
    const resp = await axios.get("https://fakestoreapi.com/carts");
    return resp.data;
}