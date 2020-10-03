import React from "react";
import { HashRouter, Route } from "react-router-dom"
import About from "./routes/about"
import home from "./routes/home"
import Detail from "./routes/Detail"
import Navigation from "./components/Navigetion"

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/about" component={About} />
      <Route path="/" exact={true} component={home} />
      <Route path="/movie-detail" component={Detail} />
    </HashRouter>
  );
}

export default App;