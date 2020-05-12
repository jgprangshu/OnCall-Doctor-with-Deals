const initialState = {
    doctors:[]
}

const doctorReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'DOCTOR_FETCH_SUCCESS':
            return{
                ...state,
                doctors: action.payload
            }
        default: return state
    }
}

export default doctorReducer;