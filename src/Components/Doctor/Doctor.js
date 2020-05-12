import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import DoctorList from './DoctorList'

export default class Doctors extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <DoctorList/>
            </div>
        )
    }
}
