import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {useRoute} from "./routes";
import {MessageState} from "./context/messageBox/MessageState";
import {MessageBox} from "./pages/Auth/childComponents/MessageBox";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/auth/authContext";

function App() {

    const {loginFn, logoutFn, authData} = useAuth()
    const routes = useRoute(authData.isAuth)

  return (
    <AuthContext.Provider value={{loginFn, logoutFn, authData}}>
      <MessageState>
          <Router>

            <div className='container height-100'>
                <MessageBox/>
                {routes}
            </div>

          </Router>
      </MessageState>
    </AuthContext.Provider>
  );
}

export default App;
