import React, { Component } from 'react'
import styles from './AdminData.module.css'
import wave from '../../images/wave.png';
import upload from '../../images/upload.svg';
import {connect} from 'react-redux'
import { fetchCountAction } from '../../Redux/actions/admin/adminActions';
import AdminModal from './AdminModal';
import AdminSnackbar from './AdminSnackbar';

class AdminData extends Component {

    state = {
        doctorUpload : false,
        couponUpload : false,
        doctorFinalSubmit : false
    }

    componentDidMount = () =>{
        this.props.fetchCount()
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.doctorUpload !== this.state.doctorUpload){
            this.props.fetchCount()
        }
      }

    couponUploadClick = () =>{
        alert('coupon clicked')
    }

    doctorUploadClick = () =>{
        this.setState({doctorUpload: !this.state.doctorUpload})
    }


    render() {
        const {noOfUsers,noOfDoctors,noOfCoupons} = this.props.count
        return (
            <div style={{marginTop: '5%'}}>
                {this.state.doctorFinalSubmit && <AdminSnackbar finalSubmit={(value)=> this.setState({doctorFinalSubmit:value})}/>}
                <img className={styles.wave} src={wave} alt="wave"></img>
                <div className={styles.container}>
                    <div>
                        <p>No. of Active Doctors</p><br/>
                        <h2>{noOfDoctors}</h2></div>
                    <div>
                        <p>No. of Active Users</p><br/>
                        <h2>{noOfUsers}</h2>
                    </div>
                    <div>
                        <p>No.of Active Coupons</p><br/>
                        <h2>{noOfCoupons}</h2>
                    </div>
                </div>

                <div className={styles.containerUpload}>
                    <div>
                        <img className={styles.upload} src={upload} alt="upload" onClick={this.doctorUploadClick}></img>
                        <h3>Upload Doctor</h3>
                    </div>
                    <div>
                        <img className={styles.upload} src={upload} alt="upload" onClick={this.couponUploadClick}></img>
                        <h3>Upload Coupon</h3>
                    </div>

                </div>

                {this.state.doctorUpload && <AdminModal setDefaultState={(value)=> this.setState({doctorUpload: value})}
                                            setDoctorFinalSubmit={(value) => this.setState({doctorFinalSubmit : value})}
                                            />}

            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        count : state.adminReducer
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchCount : () => dispatch(fetchCountAction())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AdminData)
