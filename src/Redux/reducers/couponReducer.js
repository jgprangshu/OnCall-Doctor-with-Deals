const initialState = {
    coupons : []
}

const couponReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'COUPON_FETCH_SUCCESS':
            return{
                ...state,
                coupons: action.payload
            }
        default:
             return state
    }
}

export default couponReducer;