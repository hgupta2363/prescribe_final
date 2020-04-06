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
     Pid:''
    }
  componentDidMount()
  {   const { location: { search } } = this.props;
      const values = queryString.parse(search);
      console.log(values.code)
      const token = Buffer.from(`${this.state.ClientId}:${this.state.ClientKey}`, 'utf8').toString('base64')
      console.log(token)
      axios.get(`http://https://hgupta2363-prescribe-test.glitch.me/Zoom_token/${values.code}/${token}`).then(res=>{
        this.setState({
             Url:res.data.join_url,
             Pid:localStorage.getItem('pid'),
              fee:localStorage.getItem('fee')
        })
      })
      console.log(this.state.Pid)
      axios.get(`http://localhost:5000/GetDets/${this.state.Pid}`).then(res=>{
       console.log(res.data)
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
