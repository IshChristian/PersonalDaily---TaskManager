import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Task from './pages/task';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/task" component={Task} />
      </Switch>
    </Router>
  );
}

export default App;
