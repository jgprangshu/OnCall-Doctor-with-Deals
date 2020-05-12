import React, { Component } from 'react'
import {NavLink,withRouter} from "react-router-dom";
import logo from '../../logo.svg';
import styles from './NavBar.module.css'
import {connect} from 'react-redux'
import { SignOutAction } from '../../Redux/actions/authActions/authActions';

class NavBar extends Component {

    signoutHandle =(e) =>{
        e.preventDefault();
        localStorage.removeItem('persist:root')
        this.props.signout();
        this.props.history.push('/signin')
    }
    render() {
        // const currentUser = JSON.parse(localStorage.getItem("currentUser"))
        // const {isSignedIn} = currentUser
        const {isSignedIn} = this.props.authData
        return (
            <React.Fragment>
                <nav className={styles.navBar}>
                    <ul>
                    <img className={styles.Applogo} src={logo} alt="Logo" />
                    <li><NavLink activeStyle={{borderBottom: 'solid 3px #E80A89', paddingBottom: '2px'}} to="/home" exact>Home<span></span></NavLink></li>
                    <li><NavLink activeStyle={{borderBottom: 'solid 3px #E80A89', paddingBottom: '2px'}} to="/coupons">Coupons<span></span></NavLink></li>
                    <li><NavLink activeStyle={{borderBottom: 'solid 3px #E80A89', paddingBottom: '2px'}} to="/book-doctor">Book Doctor<span></span></NavLink></li>
                    <li><NavLink activeStyle={{borderBottom: 'solid 3px #E80A89', paddingBottom: '2px'}} to="/about-us">About Us<span></span></NavLink></li>
                    
                    {!isSignedIn ?
                    <>
                    <li><NavLink to="/signin">Sign In<span></span></NavLink></li>
                    <li><NavLink to="/signup">Sign Up<span></span></NavLink></li>
                    </>: <li><NavLink to="/signout" onClick={this.signoutHandle}>Sign Out<span></span></NavLink></li>

                    }   
                    </ul>
              
                    
                    
                </nav>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        authData : state.authReducer
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        signout : () => dispatch(SignOutAction())
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(NavBar))

