import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import AdminData from './AdminData'

export default class Admin extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <AdminData/>
            </div>
        )
    }
}
