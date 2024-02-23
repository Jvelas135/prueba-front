import React from "react";
import MiComponente from "./MiComponente/MiComponente";
import TableComponent from "./TableComponent/TableComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/table" component={TableComponent} />
            <Route path="/" component={MiComponente} />
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
