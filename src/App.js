import React from "react";
import { HashRouter, Route } from "react-router-dom"
import About from "./routes/about"
import home from "./routes/home"

function App() {
  return (
    <HashRouter>
      <Route path="/about" component={About} />
      <Route path="/" exact={true} component={home} />
    </HashRouter>
  );
}

export default App;