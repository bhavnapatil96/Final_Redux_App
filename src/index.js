import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,NavLink,Switch,Route} from 'react-router-dom'
import './index.css';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './components/app.js'
import {cityList, empList, stateList} from "./actions/index";
import EmpList from './containers/emp-list.js'
import Login from './containers/login.js'
import Logout from './containers/logout.js'

import allReducers from './reducers/index.js'
import thunk from 'redux-thunk'
import {Table,Modal,Button,Form,FormGroup,Col,ControlLabel,FormControl} from 'react-bootstrap';

const store=createStore(allReducers,composeWithDevTools(),applyMiddleware(thunk));
store.dispatch(empList());
store.dispatch(stateList());
store.dispatch(cityList());

const Links =()=>{
    return(
        <section>
            <Button><NavLink to="/emp">Employee Management</NavLink></Button>
            {

                (localStorage.getItem('token'))?

                    <Button> <NavLink to="/logout">Logout </NavLink></Button>
                    :
                    <Button><NavLink to="/login">Login </NavLink></Button>
            }
        </section>
    )
}
class Home extends React.Component{
    constructor(){
        super();

    }
    componentWillMount(){

    }
    render(){
        return(
            <header>
    <center>
            <BrowserRouter>
                    <div>
                    <Links/>
                    <switch>
                        <Route path="/emp" component={EmpList}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/logout" component={Logout}/>
                        <br/><br/><br/>
                    </switch>

                    </div>

             </BrowserRouter>
    </center>
            </header>
        )
    }
}
ReactDOM.render(
    <div>
    <Provider store={store}>
        <Home />

    </Provider></div>
    ,document.getElementById('root'));
