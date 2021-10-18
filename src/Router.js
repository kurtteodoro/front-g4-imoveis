import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from './Screens/Logged/Home';
import Theme from "./Theme/Theme";

const Routers = function() {
    return (
        <Router>
            <Theme>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </Theme>
        </Router>
    );
}

export default Routers;