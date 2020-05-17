import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function AdminSnackbar(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // const handleClick = () => {
  //   setOpen(true);
  // };

  React.useEffect(()=>{
    setOpen(true);
  },[])

  const handleClose = (event, reason) => {
    setOpen(false);
    props.finalSubmit(false)
  };

  return (
    <div className={classes.root}>
      {/* <Button variant="outlined" onClick={handleClick}>
        Open success snackbar
      </Button> */}
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
            Doctor added Successfully !!
        </Alert>
      </Snackbar>
    </div>
  );
}
