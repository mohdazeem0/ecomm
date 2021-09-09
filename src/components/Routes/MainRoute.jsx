import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const MainRoute = () => {
  return (
    <div>
      <Router path="/TopNav">
        <TopNav />
        <Switch>
          <div>
            <Route path="/" exact component={} />
            
          </div>
        </Switch>
      </Router>
    </div>
  );
};

export default MainRoute;
