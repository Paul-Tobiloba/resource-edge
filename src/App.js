import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import AuthContext from './store/AuthContext';

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
    
          <Route path="/login">
            <Login />
          </Route>

        <Route path="/forgot-password">
          <ForgotPassword />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="*">
          <Redirect to='/' />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
