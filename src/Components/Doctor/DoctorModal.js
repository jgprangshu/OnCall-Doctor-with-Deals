import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { TextField, Button } from '@material-ui/core';
import {connect} from 'react-redux'
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';



const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '3px solid #003057',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 500,
    fontFamily: 'El Messiri'
  },
}));

function DoctorModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedPromo,setSelectedPromo] = React.useState();
  const [currentDoctor, setCurrentDoctor] = React.useState(props.currentDoctor)

  const handleChange = (e) =>{
    setSelectedPromo(e.target.value)
  }

  const handleClose = (e) => {
    console.log('closed')
    e.preventDefault()
    setOpen(false);
  };

  const promoHandle = (e) =>{
    e.preventDefault();
    // props.applyPromo(selectedPromo)
    var localState = JSON.parse(localStorage.getItem("currentUser"))
    var selectedCoupon = localState.couponReducer.coupons.find(item => item.couponId === selectedPromo)
    const discount = selectedCoupon.discount
    setCurrentDoctor({fees:currentDoctor.fees - (currentDoctor.fees*discount/100)})
  }

  const finalSubmitHandle = (e) =>{
    e.preventDefault()
    setOpen(false);
    // setFinalSubmit(true)
    props.finalSubmit(true)
  }

 

  React.useEffect(() => {
    console.log('data modal rendered')
    setOpen(true)
  }, [])


  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              <h2 id="transition-modal-title" style={{fontFamily:'Segoe UI Emoji',width:'100%',textAlign:"center"}}>Appointment Details</h2>
              <Button variant="contained" color="primary" style={{background:'mediumturquoise',color:'black',float:'right'}}>Rs {currentDoctor.fees}/-</Button>
              <TextField autoFocus margin="dense" id="email" label="Email Address" type="email" value={props.currentUser.email} fullWidth />
              <TextField autoFocus margin="dense" id="firstName" label="First Name" type="text" value={props.currentUser.firstName} fullWidth />
              <TextField  margin="dense" id="lastName" label="Last Name" type="text" value={props.currentUser.lastName} fullWidth />
              <div>Requested Doctor :  <h4>{props.currentDoctor.name}</h4></div>
              
              <div style={{float:'right'}}>
                <Button variant="contained" color="primary" onClick={promoHandle}>Apply</Button> &nbsp; &nbsp;
                <TextField style={{float:'right'}}id="outlined-basic" label="Promo Code" size='small' variant="outlined" onChange={handleChange}/>
              </div>

              <Fab
                variant="extended"
                size="medium"
                style={{background:'mediumturquoise',color:'white',marginTop:'20px',width:'100%',textAlign:'center'}}
                aria-label="add"
                className={classes.margin}
                onClick={finalSubmitHandle}
              >
                <NavigationIcon className={classes.extendedIcon} />
                Book Slot
              </Fab>
          </div>
        </Fade>
        
      </Modal>
      
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    currentUser : state.authReducer
  }
}


export default connect(mapStateToProps,null)(DoctorModal)