const initialState = {
    noOfUsers :0 ,
    noOfDoctors : 0 ,
    noOfCoupons : 0
}

const adminReducer = (state=initialState,action) =>{
    switch(action.type){
        case 'USER_COUNT_FETCH_SUCCESS':
            return{
                ...state,
                noOfUsers: action.payload.totalUsers
            }
        case 'DOCTOR_COUNT_FETCH_SUCCESS':
            return{
                ...state,
                noOfDoctors: action.payload.totalDoctors
            }
        case 'COUPON_COUNT_FETCH_SUCCESS':
            return{
                ...state,
                noOfCoupons: action.payload.totalCoupons
            }
        default: return state;
    }
}


export default adminReducer;