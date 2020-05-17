import React, { Component } from 'react'
import {connect} from 'react-redux'
import styles from './DoctorList.module.css'
import { getDoctorsAction } from '../../Redux/actions/doctorActions/doctorActions'
import CircularProgress from '@material-ui/core/CircularProgress'
import DoctorModal from './DoctorModal'
import { Button } from '@material-ui/core'
import CustomizedSnackbar from './CustomizedSnackbar'

class DoctorList extends Component {

    state = {
        modalOpen: false,
        selectedDoctor :{},
        finalSubmit : false
    }

    componentDidMount(){
        this.props.getDoctors();
    }

    bookHandle = (selectedDoctor) =>{
        this.setState({selectedDoctor,modalOpen :!this.state.modalOpen})
    }

    
    render() {
        console.log(this.props.doctors)
        return (
            <div className={styles.container}>
                 {this.state.finalSubmit && <CustomizedSnackbar finalSubmit={(value)=> this.setState({finalSubmit:value})} selectedDoctor={this.state.selectedDoctor}/>}
                {this.props.doctors.length ? 
                    this.props.doctors.map(item=>
                        (
                            <div className={styles.items} key={item._id}>
                                <div className={styles.avatar}>
                                    {item.image ?
                                    // <img src={`data:image/png;base64,${Buffer.from(item.image.data).toString('base64')}`} alt="mh" className={styles.avatar}/> 
                                    <img src={'http://localhost:3002/' + item.image} alt="mh"className={styles.avatar}/>
                                    :<h3>No image</h3>}
                                </div>
                                <div className={styles.description}>
                                    <div className={styles.description1}>
                                        <h2 style={{marginBottom:'5px',color:'#007c9d',fontFamily: 'El Messiri'}}>{item.name}</h2>
                                        <li>Qualification: {item.qualification}</li>
                                        <li>Speciality: {item.speciality}</li>
                                        <li>Experience: {item.experience} years</li>
                                        <li>Fees: Rs {item.fees}/hour</li>
                                        
                                    </div>

                                    <div className={styles.description2}>
                                    <i className='fas fa-map-marker-alt' style={{fontSize:'20px',color:'#007c9d'}}>
                                        <h2 style={{float:'right',fontSize:'13px',color:'#007c9d',fontFamily: 'El Messiri',marginLeft:'5px'}}> 
                                            {item.location}
                                        </h2>
                                    </i>
                                    <Button variant="contained" style={{background:'#ec7323',color:'white'}} onClick={()=>this.bookHandle(item)}>Book Appointment</Button>    
                                    </div>

                                   


                                    
                                </div>
                            </div>
                        ))
                        :
                        <CircularProgress color="secondary" size="8rem"/>

                }

                {this.state.modalOpen && <DoctorModal finalSubmit={(value)=> this.setState({finalSubmit:value})} currentDoctor={this.state.selectedDoctor}/> }

               
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        doctors : state.doctorReducer.doctors
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getDoctors : () => dispatch(getDoctorsAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DoctorList)
