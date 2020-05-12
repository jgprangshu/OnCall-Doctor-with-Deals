import axios from 'axios'

export const doctorFetchSuccess = (resp) =>{
    return{
        type: 'DOCTOR_FETCH_SUCCESS',
        payload: resp
    }
}

export const getDoctorsAction = () =>{
    return (dispatch)=>{
        axios.get('/doctor/getDoctor')
        .then(res=>{
            console.log(res)
            dispatch(doctorFetchSuccess(res.data))
        })
        .catch(err => console.log(err))
    }
}