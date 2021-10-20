import React from 'react'
import Signup from './component/SignUp/Signup'
import Login from './component/Login/Login'
import { Switch,Route } from 'react-router'
export default function App() {
    return (
       <Switch>
           <Route path="/signup" component={Signup}/>
           <Route path="/login" component={Login}/>


       </Switch>
    )
}
