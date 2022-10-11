import React, { Component } from 'react'
import axios from "axios";
import "../App.css"

export default class Enroll extends Component {
    constructor(props){
        super(props)
        this.state={
            firstname:"",
            lastname:"",
            gender:"",
            fathername:"",
            mothername:"",
            phonenumber:"",
            alternatenumber:"",
            emailid:"",
            age:"",
            houseno:"",
            streetname:"",
            areaname:"",
            statename:"",
            pincode:"",
            nationality:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    firsthandler=(event)=>{
        this.setState({
            firstname:event.target.value
        })
    }
    lasthandler=(event)=>{
        this.setState({
        lastname:event.target.value
        })
    }
    genderhandler=(event)=>{
        this.setState({
            gender:event.target.value
        })
    }
    fatherhandler=(event)=>{
        this.setState({
            fathername:event.target.value
        })
    }
    motherhandler=(event)=>{
        this.setState({
            mothername:event.target.value
        })
    }
    phonehandler=(event)=>{
        this.setState({
            phonenumber:event.target.value
        })
    }
    alternatehandler=(event)=>{
        this.setState({
            alternatenumber:event.target.value
        })
    }
    emailhandler=(event)=>{
        this.setState({
            emailid:event.target.value
        })
    }
    agehandler=(event)=>{
        this.setState({
            age:event.target.value
        })
    }
    househandler=(event)=>{
        this.setState({
            houseno:event.target.value
        })
    }
    streethandler=(event)=>{
        this.setState({
            streetname:event.target.value
        })
    }
    areahandler=(event)=>{
        this.setState({
            areaname:event.target.value
        })
    }
    statehandler=(event)=>{
        this.setState({
            statename:event.target.value
        })
    }
    pincodehandler=(event)=>{
        this.setState({
            pincode:event.target.value
        })
    }
    nationalityhandler=(event)=>{
        this.setState({
            nationality:event.target.value
        })
    }

    handleSubmit=(event)=>{
        this.setState({
            firstname:"",
            lastname:"",
            gender:"",
            fathername:"",
            mothername:"",
            phonenumber:"",
            alternatenumber:"",
            emailid:"",
            age:"",
            houseno:"",
            streetname:"",
            areaname:"",
            statename:"",
            pincode:"",
            nationality:"",
        })
        event.preventDefault();
         axios.post("http://localhost:8080/api/add_details",this.state)
         .then(response=>{
            console.log(response)
           })
           .catch(error=>{
            console.log(error)
           })
    }
  render() {
    return (
      <div className="container">
        <div className="row">
            <form onSubmit={this.handleSubmit}>
                <h1 className="text-center m-4" style={{background:"lightblue"}}>Enroll</h1>
                <input type="text" value={this.state.firstname} onChange={this.firsthandler} name="firstname" placeholder="enter firstname"/>
                <input type="text" value={this.state.lastname} onChange={this.lasthandler} name="lastname" placeholder="enter lastname"/>
                <input type="text" value={this.state.gender} onChange={this.genderhandler} name="gender" placeholder="enter gender"/>
                <input type="text" value={this.state.fathername} onChange={this.fatherhandler} name="fathername" placeholder="enter fathername"/>
                <input type="text" value={this.state.mothername} onChange={this.motherhandler} name="mothername" placeholder="enter mothername"/>
                <input type="text" value={this.state.phonenumber} onChange={this.phonehandler} name="phonenumber" placeholder="enter phonenumber"/>
                <input type="text" value={this.state.alternatenumber} onChange={this.alternatehandler} name="alternatenumber" placeholder="enter alternatenumber"/>
                <input type="text" value={this.state.emailid} onChange={this.emailhandler} name="emailid" placeholder="enter emailid"/>
                <input type="text" value={this.state.age} onChange={this.agehandler} name="age" placeholder="enter age"/>
                <input type="text" value={this.state.houseno} onChange={this.househandler} name="houseno" placeholder="enter houseno"/>
                <input type="text" value={this.state.streetname} onChange={this.streethandler} name="streetname" placeholder="enter streetname"/>
                <input type="text" value={this.state.areaname} onChange={this.areahandler} name="areaname" placeholder="enter areaname"/>
                <input type="text" value={this.state.statename} onChange={this.statehandler} name="statename" placeholder="enter statename"/>
                <input type="text" value={this.state.pincode} onChange={this.pincodehandler} name="pincode" placeholder="enter pincode"/>
                <input type="text" value={this.state.nationality} onChange={this.nationalityhandler} name="nationality" placeholder="enter nationality"/>
                <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginRight:"1em",marginTop:"1em",marginBottom:"1em",marginLeft:"1em"}}>
               Submit
             </button>
            </form>
        </div>
      </div>
    )
  }
}
