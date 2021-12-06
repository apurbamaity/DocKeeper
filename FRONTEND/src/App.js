import logo from './logo.svg';

import {Route,Switch,Redirect} from 'react-router-dom';
import './App.css';

import Home from './components/Home/Home.jsx'
import  Insideteam from './components/Insideteam/Insideteam.jsx'
import Jointeam from './components/Joincreate/Joincreate.jsx'
import Signin from './components/Form/Signin.jsx'
import Signup from './components/Form/Signup.jsx'

function App() {
  return (
      <>
        <Switch>
            {/*&<Route exact path="/" component={Home} />*/}
            <Route exact path="/" component={Home} />
            <Route exact path="/team/:teamid" component={Insideteam} />
            <Route exact path="/joinorcreate" component={Jointeam} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/signup" component={Signup} />
        </Switch>

        {/*<About />
        <Detail />*/}


      </>
  );
}

export default App;
