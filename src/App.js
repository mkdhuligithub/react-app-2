import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListEmployeeComponent from "./component/employee/ListEmployeeComponent";
import LoginComponent from "./component/employee/LoginComponent";
import LogoutComponent from "./component/employee/LogoutComponent";
import AuthenticatedRoute from './component/employee/AuthenticatedRoute';

function App() {
  return (
      <div className="container">
        <Router>
          <div className="col-md-6">
            <h1 className="text-center" style={style}>React Employee Application</h1>
            <Switch>
                <Route path="/" exact component={LoginComponent} />
                <Route path="/login" exact component={LoginComponent} />
                <Route path="/employees" component={ListEmployeeComponent} />
                <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                <AuthenticatedRoute path="/employees" exact component={ListEmployeeComponent} />
            </Switch>
          </div>
        </Router>
      </div>
  );
}

const style = {
  color: 'red',
  margin: '10px'
}

export default App;