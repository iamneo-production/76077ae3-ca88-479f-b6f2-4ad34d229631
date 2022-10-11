import React, { Component } from 'react'
import axios from "axios"
import "../App.css"

export default class ViewCourse extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8080/courses/view")
        .then(response=>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(error)
        })
    }
  render() {
    const{posts}=this.state
    return (
      <div>
        <h1 style={{backgroundColor:"lightblue"}}>List Of Courses</h1>
        {
            posts.length?
            posts.map((post)=>(
                <div key={post.id}>
                    Id:{post.id},
                    Course_Name:{post.course_name},
                    Course_Duration:{post.course_duration},
                    Course_Timings:{post.course_timings},
                    Course_Description:{post.course_description},
                    no_of_students:{post.no_of_students}
                    </div>)):
                    null
        }
      </div>
    )
  }
}