import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Screens/Logged/Home';
import Login from './Screens/Login';
import Theme from "./Theme/Theme";

const Routers = function() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Login} />
                {/* <Theme> */}
                    {/* <Route path="/home" component={Home} /> */}
                {/* </Theme> */}
            </Switch>
        </Router>
    );
}

export default Routers;