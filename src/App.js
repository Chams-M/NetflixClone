import React from "react";
import "./css/App.css";
import Main from "./pages"
import { Switch , Route } from 'react-router-dom'

function App() {
  return (
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  );
}

export default App;
