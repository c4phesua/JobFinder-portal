import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Login from './page/Login';
import SignUp from "./page/Signup";
import RouteConstants from './utils/RouteConstants';
import CreateJob from "./page/CreateJob";
import Error from "./page/Error";
import Profile from "./page/Profile";
import HomePage from "./page/HomePage"
import JobsPage from './page/JobsPage';
import HRSignup from './page/HrSignUp';
import JobDescription from './page/JobDescription';
import Footer from "./component/Footer";
import Manager from "./page/Manager";
import ProfileView from './page/ProfileView';
import HrProfile from "./page/HrManager";
import CompanyView from "./page/CompanyView";
import AdminManager from "./page/Admin";

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
          <Route exact path={RouteConstants.HR_CREATEJOB} component={CreateJob} />
          <Route exact path={RouteConstants.DASHBOARD} component={HomePage} />
          <Route exact path={RouteConstants.STUDENT_PROFILE} component={Profile} />
          <Route exact path={RouteConstants.JOBS} component={JobsPage} />
          <Route exact path={RouteConstants.EMPLOYER} component={HRSignup} />
          <Route exact path={RouteConstants.JOB_DESCRIPTION} component={JobDescription} />
          <Route exact path={RouteConstants.HR_MANAGEMENT} component={Manager} />
          <Route exact path={RouteConstants.PROFILE} component={ProfileView} />
          <Route exact path={RouteConstants.HR_PROFILE} component={HrProfile} />
          <Route exact path={RouteConstants.COMPANY_VIEW} component={CompanyView} />
          <Route exact path={RouteConstants.ADMIN} component={AdminManager} />
          <Route exact path={RouteConstants.HR_LOGIN} component={Login} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
