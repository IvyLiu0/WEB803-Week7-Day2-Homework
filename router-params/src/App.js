import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    //Insert router, links here
    <Router>
      <h2>TV APPS</h2>
      <Link to="/nertflix">
        <img
          className="nf"
          src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"
          alt="netflix"
        ></img>
      </Link>
      <Link to="/hbomax">
        <img
          className="nb"
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"
          alt="hbomax"
        ></img>
      </Link>
      <Link to="/hulu">
        <img
          className="hu"
          src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"
          alt="hulu"
        ></img>
      </Link>
      <Link to="/primevideo">
        <img
          className="pr"
          src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"
          alt="primevideo"
        ></img>
      </Link>
      <Switch>
        <Route exact path="/:id">
          <Child />
        </Route>
      </Switch>
    </Router>
  );
}

function Child() {
  // Below this comment, there's one major key script missing
  const params = useParams();
  const id = params.id;

  return (
    <div>
      <h3>
        You Selected:<span>{id}</span>
      </h3>
    </div>
  );
}
