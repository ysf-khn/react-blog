import Navbar from "./Navbar.js";
import Home from "./Home.js";
import Create from "./Create.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
        </div>
      </div>
    </Router>
  );
}

export default App;
