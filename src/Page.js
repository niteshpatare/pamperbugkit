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
      <Switch> {/*not used does not work when used inside a component*/}
      <Route exact path="/aboutpamperbug" component={Aboutbug}>
          <Aboutbug />
        </Route>
        <Route exact path="/festivekit" component={Festivekit}>
          <Festivekit />
        </Route>
        <Route exact path="/" component={Exploreenjoy}>
          <Exploreenjoy />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default Page;
