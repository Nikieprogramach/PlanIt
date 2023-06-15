import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar';
import Home from './components/pages/Home'
import Events from './components/pages/Events';
import Photos from './components/pages/Photos';
import SignUp from './components/pages/SignUp';
import LogIn from './components/pages/LogIn';
import CreateEvent from './components/pages/CreateEvent';

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/home' exact component={Home}/>
        <Route path='/events' exact component={Events} />
        <Route path='/photos' exact component={Photos} />
        <Route path='/sign-up' exact component={SignUp} />
        <Route path='/login' exact component={LogIn} />
        <Route path='/create-event' exact component={CreateEvent} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
