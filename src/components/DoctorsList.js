import React,{Component} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './css/Doctor.css'
class DoctorsList extends Component{
    state={
        doctors:[],
        doctor:''
    }
    componentDidMount()
    {
        axios.get('http://localhost:5000/getData').then(res=>{
                this.setState({
                    doctors:res.data
                })
        })
        console.log(this.state.doctors)
    }
    render()
    {
        return(
            
          
           <div className="container">
      
                
                {
                    this.state.doctors.map((value,index)=>{
                        return (
                            <Link to={'/PatientDets/'+value.doctorId+'/'+value.doctor+'/'+value.slot+'/'+value.fee} className="link"> 
                           
                           <Card style={{ width: '18rem' }}>
                               
                                    <Card.Body>
                                    <Card.Title>{value.doctor}</Card.Title>
                                    <Card.Text className="card-text">
                                    Timings: {value.slot} 
                                    <br></br>
                                    Fee: {value.fee}
                                    </Card.Text>
                                    <Button type="submit">Book Appointment</Button>
                                        </Card.Body>
                                        </Card>
                          
                            </Link>
                            )
                    })
                }
               
      
            
            </div>
          
        )
    }
}
export default DoctorsList