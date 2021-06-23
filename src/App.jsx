import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import SignUp from "./page/Signup";
import RouteConstants from './utils/RouteConstants';
import Apply from "./page/Apply";
import Manager from "./page/Manager";
import CreateJob from "./page/CreateJob";
import Error from "./page/Error";
import Profile from "./page/Profile";
import HomePage from "./page/HomePage"
import JobsPage from './page/JobsPage';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <BrowserRouter>
        <Switch>
          <Route exact path={RouteConstants.LOGIN} component={Login} />
          <Route exact path={RouteConstants.SIGNUP} component={SignUp} />
          <Route exact path={RouteConstants.ROOT} component={HomePage} />
          <Route exact path={RouteConstants.INDEX} component={HomePage} />
          <Route exact path={RouteConstants.INDEX_HTML} component={HomePage} />
          <Route exact path={RouteConstants.INDEX_PHP} component={HomePage} />
          <Route exact path={RouteConstants.HR_APPLICANTS} component={Manager} />
          <Route exact path={RouteConstants.APPLY_CV} component={Apply} />
          <Route exact path={RouteConstants.HR_CREATEJOB} component={CreateJob} />
          <Route exact path={RouteConstants.DASHBOARD} component={Dashboard} />
          <Route exact path={RouteConstants.PROFILE} component={Profile} />
          <Route exact path={RouteConstants.JOBS} component={JobsPage} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
