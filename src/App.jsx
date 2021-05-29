import logo from './logo.svg';
import './App.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import NavigationBar from './component/NavigationBar';
import Login from './page/Login';
import Dashboard from './page/Dashboard';



function App() {
  return (
    <div className="App">
      <NavigationBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/index" component={Dashboard} />
          <Route exact path="/index.html" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
