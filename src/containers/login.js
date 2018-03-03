import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login} from '../actions/index';
import {Table,Modal,Button,Form,FormGroup,Col,ControlLabel,FormControl} from 'react-bootstrap';

class Login extends React.Component{
    constructor(){
        super();
        this.state={
            obj:[]
        }
    }
    componentWillMount(){
        if(!localStorage.getItem('token'))
        {
            this.props.history.push('/login');
        }
    }
    componentWillReceiveProps(nextProps){
        if(localStorage.getItem('token'))
        {
            this.props.history.push('/emp');
        }
        else{
          //  this.props.history.push('/login');

        }
    }
    handle=(e)=>{
        e.target.value;

        const {obj}=this.state
        const {name,value}=e.target;

        obj[name]=value;

        this.setState({obj});
    }
    login1=()=>{
        var dr={
            username:this.state.obj.username,
            password:this.state.obj.password
        }
        this.props.login(dr);
    }
    render(){
        return(
            <div>
                <table>
                    <tr><td colSpan="2">Login Here</td></tr>
                    <tr>
                        <td>Username</td>
                        <td><input type="text" name="username" required="true" onChange={this.handle}/></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="password" required="true" onChange={this.handle}/></td>
                    </tr>
                    <tr>

                        <td><Button bsStyle="primary"  name="btns" value="Login" onClick={this.login1}>Login</Button></td>
                        <td><a>Sign Up</a></td>
                    </tr>
                </table>
            </div>
        )
    }
}
function mapStateToProps(state) {
    console.log('token ',state.empList)
    return{
        token:state.empList
    }
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({login},dispatch)
}
export default connect(mapStateToProps,matchDispatchToProps)(Login);