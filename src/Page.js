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
      <Route path="/aboutpamperbug" component={Aboutbug}>
          <Aboutbug />
        </Route>
        <Route path="/festivekit" component={Festivekit}>
          <Festivekit />
        </Route>
        <Route path="/">
          <Exploreenjoy />
        </Route>
      </Switch>
    </Router>
  );
}

export default Page;
