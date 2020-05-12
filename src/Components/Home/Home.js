import React from 'react'
import styles from './Home.module.css'
import NavBar from '../NavBar/NavBar'
import { connect } from "react-redux";
import logo from '../../first-aid-kit.svg';
import { HomeCarousel } from './Carousel';



    function Home (props){

         const {firstName,lastName} = props.loggedUser
        
        return (
            <React.Fragment>
                <NavBar/>
                <div className={styles.panel}>
                    <div id={styles.avatar}>
                        <h3>{firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()}</h3>
                    </div>
                    <div className={styles.intro}>
                    <p>Hello, {firstName} !!</p>
                    <p>Want to book doctor ?</p>
                </div>
                <img className={styles.Applogo} src={logo} alt="Logo" />
            </div>

            <HomeCarousel/>            

            </React.Fragment>
        )
}

const mapStateToProps = (state)=>{
    return{
        loggedUser : state.authReducer
    }
    
}

export default connect(mapStateToProps,null)(Home)