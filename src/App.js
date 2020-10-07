import React from "react";
import "./app.scss";
import Login from "./pages/login";
import Register from "./pages/register";
import Resetpwd from "./pages/resetpwd";
import Welcome from "./pages/welcome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/resetpwd" component={Resetpwd} />
          <Route path="/welcome" component={Welcome} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
