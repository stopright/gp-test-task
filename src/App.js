import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import AuthPage from "./pages/Auth/AuthPage";
import Navbar from "./commonBlocks/Navbar";
import ProfilePage from "./pages/Profile/ProfilePage";

function App() {
  return (
      <Router>
        <Navbar/>

        <div className='container'>

            <Switch>
              <Route path="/" exact>
                  <AuthPage/>
              </Route>
              <Route path="/about">
                  <ProfilePage/>
              </Route>
            </Switch>

        </div>

      </Router>
  );
}

export default App;
