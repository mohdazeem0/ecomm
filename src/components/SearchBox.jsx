import React from "react";
import "../components/Style/SearchBox.css";
import { Button, Form, FormControl } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";

const SearchBox = () => {
  return (
    <div className="main_srchbox">
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="search by products..."
          className="mr-2"
          aria-label="Search "
          id="formctrl"
        />
        <Button className="btnsrch">
          <SearchIcon id="srchicon" />
        </Button>
      </Form>
    </div>
  );
};

export default SearchBox;
