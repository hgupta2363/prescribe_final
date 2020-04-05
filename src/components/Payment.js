import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from 'react-bootstrap/Button';
import './css/Payment.css'
import axios from 'axios'

 class Payment extends Component {
   state={
     payment_data:""
   }
   
    componentDidMount()
    {
        axios.get('http://localhost:5000/payment_status').then(res=>{
                this.setState({payment_data:res.data})
        })
        
    }
  render()
  
  {
console.log(this.state.payment_data)
  
    return (
      <div class="receipt">
  
      <table class="table-receipt">
          <thead>
          <tr>
              <th class="td-bottom"
                  colspan="2">Thank you!.
              </th>

          </tr>
          <tr>
              <th class="td-bottom"
                  colspan="2"><b>payment is successful</b>
              </th>

          </tr>
          <tr>
              <th class="th-header"
                  colspan="2">PAYMENT RECEIPT
              </th>
          </tr>
         
          </thead>
          <tbody>
        
         
          <tr>
              <td class="td-title">orderid</td>
    <td class="td-content">{this.state.payment_data.order_id}</td>
          </tr>
          <tr>
              <td class="td-title">PaymentId</td>
              <td class="td-content">{this.state.payment_data.id}</td>
          </tr>
          <tr>
              <td class="td-title">TXNAMOUNT</td>
              <td class="td-content">{(Number(this.state.payment_data.amount))/100}</td>
          </tr>
          <tr>
              <td class="td-title">CURRENCY</td>
              <td class="td-content">{this.state.payment_data.currency}</td>
          </tr>
          <tr>
              <td class="td-title">TXN_STATUS</td>
              <td class="td-content">success</td>
          </tr>
        
          </tbody>
      </table>
      <button class="button">arrange zoom meeting</button>
  </div>
  );
}
}
export default Payment

