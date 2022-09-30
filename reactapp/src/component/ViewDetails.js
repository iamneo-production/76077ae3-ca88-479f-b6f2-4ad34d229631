import React, { Component } from 'react'
import axios from "axios";
import "../App.css"


export default class ViewDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8080/api/view_login")
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
        <center>
       <h1 style={{background:"lightblue"}}> List of Users/Admin</h1>
       </center>
     
         {
            
            posts.length?
            posts.map((post)=>(
            <div key={post.id}>
               
              Id:{post.id},
              Email:{post.email},
              Password:{post.password},
              UserRole:{post.userRole}
            </div>)):
            null
            
        } 
    
            
            
      </div>
    
    )
  
  }
}

