import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection:'column',
    },
    paper: {
      width:'19%',
      textAlign:'center',
      backgroundColor: '#cf4e60',
      border: '2px solid #cf4e60',
      color:'white',
      borderRadius:"8px",
      boxShadow: theme.shadows[8],
      padding: theme.spacing(4, 4, 3),
    },
    image: {
        backgroundColor: 'red',
        borderRadius: '50%',
        width: '',
        height: '',
        textAlign: 'center',
    },
}));

export default function ModalDetail(props) {
    const classes = useStyles();
  
    return (
      <div  onClick={props.detailClose}> 
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={props.open.state}
          onClose={props.detailClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 1000,
          }}
        >
          <Fade in={props.open.state}>
            <div className={classes.paper}>
                <h2 id="transition-modal-title" style={{textTransform:'capitalize'}}>{ props.open.data.name}</h2>
                <div style={{textAlign:'left'}}>
                <p style={{margin:"0"}}><span style={{fontWeight:'bold'}}>ID</span> : { props.open.data.id} </p>
                <p style={{margin:"0"}}><span style={{fontWeight:'bold'}}>Height</span> : { props.open.data.height} </p>
                <p style={{margin:"0"}}><span style={{fontWeight:'bold'}}>Weight</span> : { props.open.data.weight} </p>
                </div>
            </div>
            
          </Fade>
        </Modal>
      </div>
    );
  }
  