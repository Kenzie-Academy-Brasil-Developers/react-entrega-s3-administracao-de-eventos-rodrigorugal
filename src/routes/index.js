import { Switch, Route } from "react-router";
import PageConfra from "../pages/Confra";
import PageHome from "../pages/Home";
import PageFormatura from "../pages/Formatura";
import PageCasamento from "../pages/Casamento";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <PageHome />
      </Route>

      <Route path="/Confra">
        <PageConfra />
      </Route>

      <Route path="/Formatura">
        <PageFormatura />
      </Route>

      <Route path="/Casamento">
        <PageCasamento />
      </Route>
    </Switch>
  );
};
export default Routes;
