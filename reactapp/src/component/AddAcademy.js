import React, { Component } from 'react'
import axios from "axios"
import "../App.css"

export default class AddAcademy extends Component {
    constructor(props){
        super(props)
        this.state={
            academyname:"",
            contactnumber:"",
            imageurl:"",
            emailid:"",
            academylocation:"",
            academydescription:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    firsthandler=(event)=>{
        this.setState({
            academyname:event.target.value
        })
    }
    contacthandler=(event)=>{
        this.setState({
            contactnumber:event.target.value
        })
    }
    imageurlhandler=(event)=>{
        this.setState({
            imageurl:event.target.value
        })
    }
    emailhandler=(event)=>{
        this.setState({
            emailid:event.target.value
        })
    }
    academylocationhandler=(event)=>{
        this.setState({
            academylocation:event.target.value
        })
    }
    academydescriptionhandler=(event)=>{
        this.setState({
            academydescription:event.target.value
        })
    }
    handleSubmit=(event)=>{
        this.setState({
            academyname:"",
            contactnumber:"",
            imageurl:"",
            emailid:"",
            academylocation:"",
            academydescription:"",
        })
        event.preventDefault();
        axios.post("http://localhost:8080/api/add_academy",this.state)
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
                <h1 className="text-center m-4" style={{background:"lightblue"}}>Add Academy</h1>
                <input type="text" value={this.state.academyname} onChange={this.firsthandler} name="academyname" placeholder="enter academyname"/>
                <input type="text" value={this.state.contactnumber} onChange={this.contacthandler} name="contactnumber" placeholder="enter contactnumber"/>
                <input type="text" value={this.state.imageurl} onChange={this.imageurlhandler} name="imageurl" placeholder="enter imageurl"/>
                <input type="text" value={this.state.emailid} onChange={this.emailhandler} name="emailid" placeholder="enter emailid"/>
                <input type="text" value={this.state.academylocation} onChange={this.academylocationhandler} name="academylocation" placeholder="enter academylocation"/>
                <input type="text" value={this.state.academydescription} onChange={this.academydescriptionhandler} name="academydescription" placeholder="enter academydescription"/>
                <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginRight:"1em",marginTop:"1em",marginBottom:"1em",marginLeft:"1em"}}>
               Submit
             </button>
            </form>
        </div>
        
      </div>
    )
  }
}

