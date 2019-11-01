import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/login/login";
import notFound from "./NotFound";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/not-found" component={notFound}></Route>
          <Redirect from="/" exact to="/login"></Redirect>
          <Redirect to="/not-found" />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
