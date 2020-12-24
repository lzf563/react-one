import './App.css';

import { BrowserRouter as Router, Route, withRouter, Switch} from "react-router-dom";

import home from "./home/index.js";
import one from "./page/one";

function App() {
  return (
    <div>
      <Router>
          <Route path="/" component={home}/>
          <Route path="/one" component={one}/>
      </Router>
    </div>
  );
}

export default App;
