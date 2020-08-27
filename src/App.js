import React, {Component} from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import {TodoApp} from './components/TodoApp';
import {BrowserRouter as Router, Link, Route,Switch,withRouter} from 'react-router-dom'

import logo from './components/logo.svg';
import Login from './components/Login'




const LoginView = () => (
    localStorage.getItem("isLoggedIn")==="true"?<TodoApp/>:<Login/>
);

const TodoAppView = () => (
    localStorage.getItem("isLoggedIn")==="true"?<TodoApp/>:<Login/>
);


export class App extends Component {
    constructor(props) {
        super(props);
        localStorage.setItem("user","password")
    }
    
  

    

    render() {
        if(localStorage.getItem("isLoggedIn")===undefined){
            localStorage.setItem("isLoggedIn",false)
        }
        return (
            <Router>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">TODO React App</h1>
                </header>

                <br/>
                <br/>

               
            
                    <Switch>
                    <Route exact path="/" component={LoginView}/>
                    <Route path="/todo" component={TodoAppView}/>
                    </Switch>
                
            </div>
        </Router>
        );
        }

}
