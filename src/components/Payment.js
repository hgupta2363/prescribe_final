import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from 'react-bootstrap/Button';
import './css/Payment.css'
import axios from 'axios'

 class PaymentForm extends Component {
    onSubmit(e)
    {
        e.preventDefault()
        var id=window.location.pathname.split('/')[2]
        console.log(id)
        axios.get('http://localhost:5000/final/'+id).then(res=>{
            window.location='/zoom_call_token/'+res.data.pid
     
        })
    }
  render()
  
  {

  
    return (
      <form className="container payment-grid" onSubmit={this.onSubmit}>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField required id="cardName" label="Name on card" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="cardNumber" label="Card number" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField required id="expDate" label="Expiry date" fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveCard" value="yes" />}
            label="Remember credit card details for next time"
          />
        </Grid>
      </Grid>
    </React.Fragment>
    <div className="btn">
    <Button type="submit" >SUBMIT</Button>
    </div>
    
   
    </form>
  );
}
}
export default PaymentForm

