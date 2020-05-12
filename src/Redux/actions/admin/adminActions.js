import axios from 'axios'


const userCountSuccess= (userCount) =>{
    console.log(userCount)
    return{
        type: 'USER_COUNT_FETCH_SUCCESS',
        payload: userCount
    }
}

const doctorCountSuccess= (doctorCount) =>{
    console.log(doctorCount)
    return{
        type: 'DOCTOR_COUNT_FETCH_SUCCESS',
        payload: doctorCount
    }
}

const couponCountSuccess= (couponCount) =>{
    console.log(couponCount)
    return{
        type: 'COUPON_COUNT_FETCH_SUCCESS',
        payload: couponCount
    }
}


export const fetchCountAction = () =>{
    return (dispatch) =>{
        // try{
        //     const userCount = axios.get('/count/users')
        //     .then(res => res.data.totalUsers)

        //     const doctorCount = axios.get('/count/doctors')
        //     .then(res => res.data)

        //     const couponCount = axios.get('/count/coupons')
        //     .then(res => res.data)

        //     dispatch(countFetchSuccess(userCount,doctorCount,couponCount))
        // }
        // catch(err){
        //     console.log(err)
        // }
        axios.get('/count/users')
        .then(users => dispatch(userCountSuccess(users.data)))
        .then(() => axios.get('/count/doctors'))
        .then(doctors => dispatch(doctorCountSuccess(doctors.data)))
        .then(() => axios.get('/count/coupons'))
        .then(coupons => dispatch(couponCountSuccess(coupons.data)))
        .catch(error => {
            console.log(error)
        });
        
        
    }
}