import React from "react";
import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage"
import TestPage from "./pages/TestPage"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {

  // api call
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (

    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/test" component={TestPage} />
        <Route component={HomePage} />
      </Switch>
    </Router>

  );
}

export default App;
