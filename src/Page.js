import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Exploreenjoy from "./component/Exploreenjoy.js";
import Festivekit from "./component/Festivekit.js";
import Aboutbug from "./component/Aboutbug.js";

function Page() {
  return (
    <Router>
      <Switch>
      <Route exact path="/aboutpamperbug" >
          <Aboutbug />
        </Route>
        <Route exact path="/festivekit" >
          <Festivekit />
        </Route>
        <Route exact path="/">
          <Exploreenjoy />
        </Route>
      </Switch>
    </Router>
  );
}

export default Page;
