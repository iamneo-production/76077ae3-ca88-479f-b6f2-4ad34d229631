import React, { Component } from 'react'
import axios from "axios"
import "../App.css"

export default class AddCourse extends Component {
    constructor(props){
        super(props)
        this.state={
            course_name:"",
            course_duration:"",
            course_timings:"",
            course_description:"",
            no_of_students:"",
        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    firsthandler=(event)=>{
        this.setState({
            course_name:event.target.value
        })
    }
    durationhandler=(event)=>{
        this.setState({
            course_duration:event.target.value
        })
    }
    timingshandler=(event)=>{
        this.setState({
            course_timings:event.target.value
        })
    }
    descriptionhandler=(event)=>{
        this.setState({
            course_description:event.target.value
        })
    }
    studentshandler=(event)=>{
        this.setState({
            no_of_students:event.target.value
        })
    }
    handleSubmit=(event)=>{
        this.setState({
            course_name:"",
            course_duration:"",
            course_timings:"",
            course_description:"",
            no_of_students:"",
        })
        event.preventDefault();
        axios.post("http://localhost:8080/courses/add",this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
  render() {
    return (
      <div className='="container'>
        <div className='row'>
            <form onSubmit={this.handleSubmit}>
          <center><h2 className='="text-center m-4'style={{background:"lightblue"}}>Add Course</h2></center>
                <input type="text" value={this.state.course_name} onChange={this.firsthandler} name="course_name" placeholder="enter course_name"/>
                <input type="text" value={this.state.course_duration} onChange={this.durationhandler} name="course_duration" placeholder="enter course_duration"/>
                <input type="text" value={this.state.course_description} onChange={this.descriptionhandler} name="course_description" placeholder="enter course_description"/>
                <input type="text" value={this.state.course_timings} onChange={this.timingshandler} name="course_timings" placeholder="enter course_timings"/>
                <input type="text" value={this.state.no_of_students} onChange={this.studentshandler} name="no_of_students" placeholder="enter no_of_students"/>
                <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginRight:"1em",marginTop:"1em",marginBottom:"1em",marginLeft:"1em"}}>
               Submit
             </button>
            </form>
        </div>
        
      </div>
    )
  }
}
