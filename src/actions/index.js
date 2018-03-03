const axios=require('axios')
export const selectUser=(user)=>{
    console.log("You clicked on ",user.name)
    debugger;
    return{
        type:"USER_SELECTED",
        payload:user
    }
}
export const stateList=(payload)=>{
    //debugger;
    // return{
    //     type:"STATE_LIST",
    //     payload
    // }
    return (dispatch)=>{
        axios.get('http://localhost:8282/statelist').then((response)=>{

            console.log(' in state action State Data : ',response.data);
            //this.props.method.dispatch(empList(response.data))
            dispatch({
                type:"STATE_LIST",
                payload:response.data
            })
        })


    }
}
export const cityList=(payload)=>{
    //debugger;

    // console.log("Your ACTION state  ",payload)
    // return{
    //     type:"CITY_LIST",
    //     payload
    // }
    return (dispatch)=>{
        axios.get('http://localhost:8282/citylist').then((response)=>{
            console.log('City Data : ',response.data);
            //this.props.method.dispatch(empList(response.data))
            dispatch({
                type:"CITY_LIST",
                payload:response.data
            })
        })


    }
}

export const empList=(payload)=>{
    //debugger;
   // console.log("Your ACTION  ",payload)
   //  return{
   //      type:"EMP_LIST",
   //      payload
   //  }
    return (dispatch)=>{
        axios.get('http://localhost:8282/list').then((response)=>
        {
            console.log('EMp Data : ',response.data);
            dispatch({
                type:"EMP_LIST",
                payload:response.data
            })
        })


    }


}
export const deleteEmp=(payload)=>{
    //debugger;
    // console.log("Your ACTION  ",payload)
    // return{
    //     type:"DELETE_EMP",
    //     payload
    // }

    return (dispatch)=>{
        axios.post('http://localhost:8282/delete',payload).then((response)=>
        {
            console.log('EMp delete Data : ',response.data);
            dispatch({
                type:"DELETE_EMP",
                payload:response.data
            })
        })


    }



}
export const addEmp=(payload)=>{
    // console.log("Your add ACTION  ",payload)
    // return{
    //     type:"ADD_EMP",
    //     payload
    // }

    return (dispatch)=>{
        axios.post('http://localhost:8282/add',payload).then((response)=>
        {
            console.log('EMp Data : ',response.data);
            dispatch({
                type:"ADD_EMP",
                payload:response.data
            })
        })


    }

}
export const updateEmp=(payload)=>{
    console.log("Your ACTION  ",payload)
    return{
        type:"UPDATE_EMP",
        payload
    }

    return (dispatch)=>{
        axios.post('http://localhost:8282/update',payload).then((response)=>
        {
            console.log('EMp Update Data : ',response.data);
            dispatch({
                type:"UPDATE_EMP",
                payload:response.data
            })
        })


    }

}
export const login=(payload)=>{
    console.log('in login action ',payload)
    return (dispatch)=>{
        axios.post('http://localhost:8282/userloginp',payload).then((response)=>{
            console.log(' after axios in login action ',response)
            console.log(' after axios in login header ',response.headers['x-auth'])

            dispatch({
                type:"LOGIN_USER",
                payload:response.headers["x-auth"]
            })
        })
    }
}



