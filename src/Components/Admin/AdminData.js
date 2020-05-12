import React, { Component } from 'react'
import styles from './AdminData.module.css'
import wave from '../../images/wave.png';
import {connect} from 'react-redux'
import { fetchCountAction } from '../../Redux/actions/admin/adminActions';

class AdminData extends Component {

    componentDidMount = () =>{
        this.props.fetchCount()
    }

    render() {
        const {noOfUsers,noOfDoctors,noOfCoupons} = this.props.count
        return (
            <div style={{marginTop: '5%'}}>
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
