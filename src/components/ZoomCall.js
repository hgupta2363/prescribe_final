import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './css/Zoom.css'
import {Link} from "react-router-dom";
import axios from 'axios';

export default class Zoomcall extends Component{
  state={
     Name:'',
     HospName:'',
     DocName:'',
     Slot:'',
     Pname:''



  }
  
  render()
  {
    return (
      <div className="zoom-grid container">
      <React.Fragment>
      <Typography variant="h6" gutterBottom>
       ZoomCall Link
      </Typography>
      <Grid container spacing={3}>
        
        
        
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            value="7lstjK9NTyett_oeXtFiEQ&redirect_uri=https://yourapp.com"
          />
        </Grid>
        <Grid item xs={12} class="zoom-para">
        Dear <b>shubham choudhary</b> your appointment has been confirmed at <b>NIZAR</b> hospital with Doc <b>J.SIVA</b> at <b>9:00 to 12:00</b> hours. "
        Please install Zoom app using the below link for video consulting with your Doctor.
        <link/>
        Your Token Number is: <b> 8 </b><br></br>
        Requesting you to follow the live status through whats-app by typing "STATUS"
        Kindly note that the doctor's availability and token order may vary to handle emergency cases.
        We will alert you once the Doctor is ready
        </Grid>
      </Grid>
    </React.Fragment>
    </div>
    );
  }
 
}
