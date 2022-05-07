import { Route, Switch } from "react-router-dom";
import { useState } from "react";

import "./Styles/global.css";
import "./App.css";
import { Home, Product, Search } from "./pages";
import { BackToUp } from "./components/elements/BackToUp/BackToUp";

function App() {
  const [showButton, setShowButton] = useState(false);
  document.body.onscroll = (e) => {
    if (window.pageYOffset > 400 && showButton === false) {
      setShowButton(true);
    } else if (window.pageYOffset < 400 && showButton === true) {
      setShowButton(false);
    }
  };
  return (
    <div className="App">
      {showButton ? <BackToUp /> : null}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/product" exact component={Product} />
        <Route path="/search" exact component={Search} />
      </Switch>
    </div>
  );
}

export default App;
