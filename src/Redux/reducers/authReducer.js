const initialState = {
    firstName:'',
    lastName:'',
    email:'',
    role: 0,
    isSignedIn: false
}

const authReducer = (state=initialState, action) =>{
    switch(action.type){
        case 'LOG_IN_SUCCESS':
            console.log(action.payload)
            return{
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                email: action.payload.email,
                role:action.payload.role,
                isSignedIn: true,
                
            }
        case 'LOG_OUT_SUCCESS':
            console.log(action.payload)
            return{
                ...state,
                firstName: '',
                lastName: '',
                isSignedIn: false
            }
            default: return state;
    }
}

export default authReducer;