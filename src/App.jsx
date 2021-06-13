import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import SignUp from "./page/Signup";
import RouteConstants from './utils/RouteConstants';
import Apply from "./page/Apply";
import Manager from "./page/Manager";
import CreateJob from "./page/CraeteJob";
import Error from "./component/Error";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <BrowserRouter>
        <Switch>
          <Route exact path={RouteConstants.LOGIN} component={Login} />
          <Route exact path={RouteConstants.SIGNUP} component={SignUp} />
          <Route exact path={RouteConstants.ROOT} component={Dashboard} />
          <Route exact path={RouteConstants.INDEX} component={Dashboard} />
          <Route exact path={RouteConstants.INDEX_HTML} component={Dashboard} />
          <Route exact path={RouteConstants.INDEX_PHP} component={Dashboard} />
          <Route exact path={RouteConstants.HR_APPLICANTS} component={Manager} />
          <Route exact path={RouteConstants.APPLY_CV} component={Apply} />
          <Route exact path={RouteConstants.HR_CREATEJOB} component={CreateJob} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
