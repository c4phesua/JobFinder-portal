import './App.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Login from './page/Login';
import Dashboard from './page/Dashboard';
import SignUp from "./page/Signup";
import Apply from "./page/Apply";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/index" component={Dashboard} />
          <Route exact path="/index.html" component={Dashboard} />
          <Route exact path="/apply" component={Apply} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
