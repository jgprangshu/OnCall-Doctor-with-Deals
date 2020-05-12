import React from 'react'
import {connect} from 'react-redux'
import { getCouponsAction } from '../../Redux/actions/couponActions/couponActions'
import CircularProgress from '@material-ui/core/CircularProgress'
// import styles from './CouponList.module.css'
// import logo from '../../logo.svg'

const container = {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center', 
    marginTop:'5%',
}

const items = {
    border: '2px solid black',
    height: '240px',
    width: '20%',
    margin: '20px',
    listStyle: 'none',
    color : 'white',
    fontFamily: 'Cuprum',
    fontSize: '15px',
    textTransform:'capitalize',
    cursor:'pointer'    
}

const coupon = {
    width: '90%',
    textAlign: 'center',
    margin: '0 10px',
    color:'black',
    paddingTop:"10px",
}

const button = {
    width: '60%',
    textAlign: 'center',
    margin: '0 50px',
    borderRadius: '10px',
    height: '1.5rem',
    background: 'aquamarine',
    marginTop:'10px',
    fontWeight:'600',
    outline:'none'
}

const img ={
    width:'100%',
    height:'20vh',
    overflow: 'hidden'
}

class CouponList extends React.Component {
    state = {
        copySuccess: false,
        selectedCoupon : ''
    }

    copyCodeToClipboard = (couponId,selectedCoupon) => {
        navigator.clipboard.writeText(couponId)
        this.setState({copySuccess: true})
        this.setState({selectedCoupon})
      }

      componentDidMount(){
          this.props.getCoupons();
      }

      

    render(){
        return(
            
            <div style={container}>
                {
                    this.props.coupons.length ? 
                    // <img src={`data:image/png;base64,${this.props.coupons.decryptImage}`} alt="mh" style={{width:"500px"}}/> 
  
                    this.props.coupons.map(item=> 
                    (
                        <li style={items} key={item._id}>
                            <div>
                                <h3 id='display' style={coupon}> {item.couponId}</h3>
                                </div>
                                <div>
                                {item.image ?
                                <img src={`data:image/png;base64,${Buffer.from(item.image.data).toString('base64')}`} alt="mh" style={img}/> 
                                :<h3>No image</h3>}

                                <h3 style={{color:'black',width:'100%',textAlign:"center"}}>{item.description}</h3>
                                <button style={button} onClick={() => this.copyCodeToClipboard(item.couponId,item._id)}>
                                    Copy Coupon
                                </button>
                                {
                                    this.state.copySuccess && this.state.selectedCoupon === item._id?
                                    <div style={{"color": "green"}}>
                                    Copied!
                                    </div> : null
                                }
                            </div>
                        </li>
                    )) 
                    
                    :  <CircularProgress color="secondary" size="8rem"/>
                }
            
        </div>
        )





            
            
        
    }

}

const mapStateToProps = (state) =>{
    return{
        coupons : state.couponReducer.coupons
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        getCoupons : () => dispatch(getCouponsAction())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CouponList)


