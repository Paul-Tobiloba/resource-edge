import { Route } from 'react-router-dom';
import './App.css';

import Dashboard from './components/pages/Dashboard';
import Login from './components/pages/Login';
import ForgotPassword from './components/pages/ForgotPassword';
import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/dashboard" component={Dashboard} />
    </div>
  );
}

export default App;
