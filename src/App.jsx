import './App.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import SignUp from "./page/Signup";
import Applicants from './page/Applicant';
import RouteConstants from './utils/RouteConstants';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <BrowserRouter>
        <Switch>
          <Route exact path={RouteConstants.LOGIN}component={Login} />
          <Route exact path={RouteConstants.SIGNUP} component={SignUp} />
          <Route exact path={RouteConstants.ROOT} component={Dashboard} />
          <Route exact path={RouteConstants.INDEX} component={Dashboard} />
          <Route exact path={RouteConstants.INDEX_HTML} component={Dashboard} />
          <Route exact path={RouteConstants.INDEX_PHP} component={Dashboard} />
          <Route exact path={RouteConstants.HR_APPLICANTS} component={Applicants} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
