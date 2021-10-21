import React from 'react'
import Signup from './component/SignUp/Signup'
import Login from './component/Login/Login'
import Header from './component/header/Header'
import Database from './component/database/Database'
import { Switch,Route } from 'react-router'
export default function App() {
    return (
       <Switch>
           <Route exact path="/" component={Header}/>
           <Route exact path="/signup" component={Signup}/>
           <Route  exact path="/login" component={Login}/>
           <Route  exact path="/database" component={Database}/>


       </Switch>
    )
}
