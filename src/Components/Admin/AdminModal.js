import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { TextField} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import {connect} from 'react-redux'
import { uploadDoctorAction } from '../../Redux/actions/admin/adminActions';



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
    border: '3px solid #2ed096',
    boxShadow: theme.shadows[3],
    padding: theme.spacing(1, 4, 2),
    width: 450,
    fontFamily: 'El Messiri'
  },
}));

function AdminModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [doctor,setDoctor] = React.useState({
    name: '',
    qualification:'',
    speciality:'',
    location:'',
    experience:0,
    fees:0,
    image: '',
  });
  
//   const handleImageChange = (e) =>{
//     e.preventDefault();
//     let formData = new FormData();

//     console.log(doctor)

//     formData.append('description', doctor.name);
//     formData.append('image', doctor.image)
    
//     axios.post('/doctor/entry', formData)
//     .then(res => console.log(res))
     
//   }

  const handleChange = (e) =>{
    switch (e.target.id) {
        case 'selectedFile':
          setDoctor({
              ...doctor,
              image: e.target.files[0]})
          break;
        default:
            setDoctor({
                ...doctor, 
                [e.target.id]: e.target.value 
            });
      }
  }

  const handleClose = (e) => {
    console.log('closed')
    e.preventDefault()
    setOpen(false);
    props.setDefaultState(false)
  };

  const finalSubmitHandle = (e) =>{
    e.preventDefault()

    let formData = new FormData();
    formData.append('name',doctor.name);
    formData.append('qualification',doctor.qualification);
    formData.append('speciality',doctor.speciality);
    formData.append('location',doctor.location);
    formData.append('experience',doctor.experience);
    formData.append('fees', doctor.fees)
    formData.append('image', doctor.image)
    props.uploadDoctor(formData)
    // console.log(formData.formEntries)

    setDoctor({})
    props.setDefaultState(false) 
    props.setDoctorFinalSubmit(true)
    setOpen(false);
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
              <h2 id="transition-modal-title" style={{fontFamily:'Cuprum',width:'100%',textAlign:"center"}}>Upload Doctor Details</h2>
              <TextField autoFocus margin="dense" id="name" label="Name" type="text" fullWidth onChange={handleChange}/>
              <TextField  margin="dense" id="qualification" label="Qualification" type="text" fullWidth onChange={handleChange}/>
              <TextField  margin="dense" id="speciality" label="Speciality" type="text" fullWidth onChange={handleChange}/>
              <TextField  margin="dense" id="experience" label="Experience" type="number" fullWidth onChange={handleChange}/>
              <TextField  margin="dense" id="location" label="Location" type="text" fullWidth onChange={handleChange}/>
              <TextField  margin="dense" id="fees" label="Fees" type="number" fullWidth onChange={handleChange}/>
              <input type="file" id="selectedFile" onInput={handleChange}/>

              <Fab
                variant="extended"
                size="medium"
                style={{background:'#2dd097',color:'white',marginTop:'20px',width:'100%',textAlign:'center'}}
                aria-label="add"
                className={classes.margin}
                onClick={finalSubmitHandle}
              >
                <NavigationIcon className={classes.extendedIcon} />
                Upload
              </Fab>
          </div>
        </Fade>
        
      </Modal>
      
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>{
    return{
        uploadDoctor : (doctor) => dispatch(uploadDoctorAction(doctor))
    }
}

export default connect(null,mapDispatchToProps)(AdminModal)


