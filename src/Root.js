import React from "react";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from './components/Navigation';
import App from "./App";
import configureStore from "./configureStore";

const store = configureStore();

function Root() {
    return (
        <Provider store={store}>
            <Router>
                <Navigation />
                <hr />
                <App />
            </Router>
        </Provider>
    );
}

export default Root;