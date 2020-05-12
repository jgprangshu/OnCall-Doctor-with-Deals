import axios from 'axios';

export const LoginSuccess = (resp) =>{
    return{
        type: 'LOG_IN_SUCCESS',
        payload: resp.data
    }
}

export const LogOutSuccess = (resp) =>{
    return{
        type: 'LOG_OUT_SUCCESS'
    }
}


export const LoggedIn = (email,password) =>{
    return (dispatch) =>{
        console.log(email)
        axios.post('/signin',{
            "email" : email,
            "password": password
        }).then(resp=>{
            // localStorage.setItem("token",resp.data.token);
            dispatch(LoginSuccess(resp))
        })
    }
    
}

export const SignUpAction = (form) =>{
    const {email,password,lastName,firstName} = form
    alert(email)
    return (dispatch) =>{
        axios.post('http://localhost:3002/api/signup',{
            firstName,lastName,email,password 
        }).then(()=> console.log('SignUp Success'))
        .catch(()=> console.log('SignUp Failed'))
    }
}

export const SignOutAction = () =>{
    return (dispatch) =>{
        axios.get('http://localhost:3002/api/signout')
        .then(()=> {
            dispatch(LogOutSuccess())
        })
        .catch(()=>alert('Error while Signing out'))
    }
}