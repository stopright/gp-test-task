import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {AuthPage} from "./pages/Auth/AuthPage";
import {ProfilePage} from "./pages/Profile/ProfilePage";

export const useRoute = (isAuth) => {
    if (isAuth) {

        return (
        <Switch>
            <Route path="/profile" exact>
                <ProfilePage/>
            </Route>
            <Redirect to="/profile"/>
       </Switch>
      )}

    else {
        return (
            <Switch>
                <Route path="/auth" exact>
                    <AuthPage/>
                </Route>
                <Redirect to="/auth"/>
            </Switch>
        )

    }
}