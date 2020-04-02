import React,{Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css"
import './css/Patient.css'
import { getDefaultNormalizer } from '@testing-library/react';



 class AddressForm extends Component {
    constructor(props)
    {
        super(props)
    this.onChangeLName=this.onChangeLName.bind(this)
    this.onChangeFName=this.onChangeFName.bind(this)
  
    this.onChangeAge=this.onChangeAge.bind(this)
    this.onChangePhone=this.onChangePhone.bind(this)
    // this.onChangeCity=this.onChangeCity.bind(this)
    this.onChangeSex=this.onChangeSex.bind(this)
    this.onChangeEmail=this.onChangeEmail.bind(this)
    this.onChangeAddress=this.onChangeAddress.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
    this.state={
     fName:'',
     lName:'',
     name:'',
     age:'',
     phone:'',
    //  City:'',
     sex:'',
     address:'',
     email:'',
     docId:'',
    Alert:false,
    error:'',
    gender:["Male","Female"]
    //  Cities:[]
    }
    }

    onChangeFName(e)
    {
        this.setState({
            fName:e.target.value
        })
    }
    onChangeLName(e)
    {
        this.setState({
            lName:e.target.value
        })
    }
 
    onChangeSex(e)
    {
        this.setState({
            sex:e.target.value
        })
    }
    onChangeAge(e)
    {
        this.setState({
            age:e.target.value
        })
    }
    // onChangeCity(e)
    // {
    //     this.setState({
    //         City:e.target.value
    //     })
    // }
    onChangePhone(e)
    {
        this.setState({
            phone:e.target.value
        })
    }
    onChangeEmail(e)
    {
        this.setState({
            email:e.target.value
        })
    }
    onChangeAddress(e)
    {
        this.setState({
        address:e.target.value
        })
    }
    onSubmit(e)
    {
        e.preventDefault();
        var id=window.location.pathname.split('/')
        console.log(id)
        const NewUser={
            name:`${this.state.fName} `+`${this.state.lName}`,
            age:this.state.age,
            sex:this.state.sex,
            email:this.state.email,
            phone:this.state.phone,
            address:this.state.address,
            docId:id[2],
            docName:id[3],
            Slot:id[4]
          }
          console.log(NewUser)
        axios.post('http://localhost:5000/patientDetail',NewUser).then(res=>{
          if(res.data.status)
          {
            
            setTimeout(()=>{
              window.location="/zoom_call_token/"+res.data.PatientId;
              
            },4000)
            // 
            
          }
         
          console.log(res.data.status)
        })
       

    }

    render()
    {
    return (
        <div className="row">
            <div className="col-lg-6">
    <React.Fragment>
      <Typography variant="h6" gutterBottom className="heading-Patient">
        Patient Details
      </Typography>

      <form onSubmit={this.onSubmit} className="container">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="fname"
            value={this.state.fName}
            onChange={this.onChangeFName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="lname"
            value={this.state.lName}
            onChange={this.onChangeLName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address"
            fullWidth
            autoComplete="billing address-line1"
            value={this.state.address}
            onChange={this.onChangeAddress}
          />
        </Grid>


        <Grid item xs={12} sm={6}>
          <TextField
          id="state"
          name="state"
          label="Phone Number"
          required="true"
          value={this.state.phone}
          onChange={this.onChangePhone}
          fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Age"
            fullWidth
            autoComplete="billing postal-code"
            value={this.state.age}
            onChange={this.onChangeAge}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            type="email"
            label="Email"
            fullWidth
            autoComplete="billing country"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
        <select value={this.state.sex} onChange={this.onChangeSex}>
        <option >{this.state.gender[0]}</option>
        <option >{this.state.gender[1]}</option>
        </select>
            
          
        </Grid>
        <Grid item xs={12} sm={6}>
      <button type="submit" className="btn btn-primary">Submit</button>
      </Grid>
      </Grid>

    </form>

    </React.Fragment>
    </div>
    </div>
  )
 }
}
export default AddressForm
