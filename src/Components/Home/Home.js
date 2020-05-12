import React from 'react'
import styles from './Home.module.css'
import NavBar from '../NavBar/NavBar'
import { connect } from "react-redux";
import wave from '../../images/wave.png';
import background from '../../images/background.svg';


function Home (props){

    const handleClick = () =>{
        props.history.push('/coupons')
    }
    const {firstName} = props.loggedUser
    return (
        <React.Fragment>
            <NavBar/>

            <div style={{marginTop: '10vh'}}>
                <img className={styles.wave} src={wave} alt="wave"></img>
                <div className={styles.container}>
                    <div className={styles.img}>
                        <img  src={background} alt="background"></img>
                    </div>
                    <div>
                        <h2>Welcome, </h2>
                        <h2 id={styles.name}>{firstName}!!</h2>
                        <div id={styles.redirectButton} onClick={handleClick}>
                            <p> Grab Coupons and Consult Doctors...</p>
                        </div>
                    </div>
                    
                </div> 
            </div>

        </React.Fragment>
    )
}

const mapStateToProps = (state)=>{
    return{
        loggedUser : state.authReducer
    }
    
}

export default connect(mapStateToProps,null)(Home)