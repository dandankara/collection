import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'

import MaterialSearch from "../components/Search/Search";

const Root = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={MaterialSearch} />
            </Switch>
        </Router>
    )
}

export default Root