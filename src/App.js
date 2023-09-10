import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/home/Home";
import Profile from "./containers/profile/Profile";
import AppContext from './AppContext';
import { useState, Suspense } from 'react';

function App() {
  const [appState, setAppState] = useState({});
  console.log('appState: ', appState);

  return (
    <div className="App">
      <AppContext.Provider value={{ appState, setAppState }}>
        <Suspense fallback={'loading...'}>
          <Router>
            <Route exact path="/" component={Home}></Route>
            <Route path="/home" component={Home}></Route>
            <Route path="/:userId/:type" component={Profile}></Route>
            {/* <Route path="/:userId/profile" component={Profile}></Route>
            <Route path="/:userId/profile" component={Profile}></Route>
            <Route path="/:userId/profile" component={Profile}></Route> */}
          </Router>
        </Suspense>
      </AppContext.Provider>
    </div>
  );
}

export default App;
