import axios from 'axios'

export const couponFetchSuccess = (resp) =>{
    console.log('reached action')
    return{
        type: 'COUPON_FETCH_SUCCESS',
        payload: resp
    }
}

export const getCouponsAction = () =>{
    return (dispatch) =>{
        axios.get('/coupon/getCoupons')
        .then(res=>{
            console.log(res.data)
            dispatch(couponFetchSuccess(res.data))
        })
        .catch(err => console.log(err))
    }
}


// export const applyPromoAction = (couponId) =>{
//     console.log(JSON.parse(localStorage.getItem("currentUser")))
//     return (dispatch) =>{
//         axios.post('/coupon/getCouponById',{
//             "couponId": couponId
//         }).then(res=>{
//             console.log(res)
//         })
//         .catch(err => console.log(err))
//     }
// }