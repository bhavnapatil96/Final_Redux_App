import React from 'react'
class Logout extends React.Component{
    constructor(){
        super();

    }
    componentWillMount(){
        localStorage.removeItem("token");

        this.props.history.push('/login')
    }

}
export default Logout;