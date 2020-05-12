import React, { Component } from 'react'
import NavBar from '../NavBar/NavBar'
import CouponList from './CouponList'

export default class Coupons extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <CouponList/>
            </div>
        )
    }
}
