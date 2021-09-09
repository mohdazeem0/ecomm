import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../components/Style/Product.css";
import { NaveBar } from "./NaveBar";

import { ProductList } from "./ProductList";
import { getProducts } from "../services/Product";
import SearchBox from "./SearchBox";

export const Home = () => {
  const [searchTxt, setSearchTxt] = useState(" ");

  const dispatch = useDispatch();

  const allProducts = async () => {
    const productsList = await getProducts();
    console.log(productsList);
    dispatch({
      type: "ADD_DATA",
      data: productsList,
    });
  };
  useEffect(() => {
    allProducts();
  }, []);

  return (
    <React.Fragment>
      <NaveBar />
      <br />
      <SearchBox />
      <br />
      <ProductList />
    </React.Fragment>
  );
};
