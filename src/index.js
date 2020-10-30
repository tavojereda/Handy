import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Purchase from "./components/Purchase";
import reportWebVitals from "./reportWebVitals";
import "normalize.css/normalize.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";


const NotFound = () => <div>404</div>;

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact={true} />
      <Route path="/purchase" component={Purchase} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
