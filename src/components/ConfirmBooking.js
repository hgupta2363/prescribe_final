import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import './css/Zoom.css'
import {Link} from "react-router-dom";
import axios from 'axios';
import queryString from 'query-string'

export default class Zoomcall extends Component{
  state={
     Name:'',
     HospName:'',
     DocName:'',
     Slot:'',
     Pname:'',
     ClientId:'bMuzuK72TOigchDSFxqNRA',
     ClientKey:'mYdUhLKE3CI22eRCsmgcl2NyuG4GZjPU',
     token:'',
     Url:'',
     Pid:'',
     fee:'',
     finalUrl:''
    }
  componentDidMount()
  {  
        var id=window.location.pathname.split('/')
        const zoom={
            link:localStorage.getItem('url')
        }
        axios.post(`http://https://hgupta2363-prescribe-test.glitch.me/GetDets/${id[2]}`,zoom).then(res=>{
          if(res.data.object)
          {
            this.setState({
              name:res.data.object.name,
              HospName:res.data.object.HospitalName,
              Slot:res.data.object.Slot,
              DocName:res.data.object.docName,
              Url:res.data.link,
            })
          }
        })
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
            value={this.state.Url}
          />
        </Grid>
        <Grid item xs={12} className="zoom-para">
        Dear <b>{this.state.name}</b> your appointment has been confirmed at <b>{this.state.HospName}</b> hospital with Doc <b>{this.state.DocName}</b> at <b>{this.state.Slot}</b> hours. "
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
