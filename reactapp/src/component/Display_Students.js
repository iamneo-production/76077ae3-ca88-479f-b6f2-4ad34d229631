import React, { Component } from 'react'
import axios from "axios"
import "../App.css"

export default class Display_Students extends Component {
    constructor(props){
        super(props)
        this.state={
            posts:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:8080/api/view_details")
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
        <h1 style={{background:"lightblue"}}>List Of Students</h1>
        {
            posts.length?
            posts.map((post)=>(
                <div key={post.id}>
                    Id:{post.id},
                    First_Name:{post.firstname},
                    Last_Name:{post.lastname},
                    Gender:{post.gender},
                    Father_Name:{post.fathername},
                    Mother_Name:{post.mothername},
                    Phone_Number:{post.phonenumber},
                    Altername_Number:{post.alternatenumber},
                    Email_id:{post.emailid},
                    Age:{post.age},
                    House_no:{post.houseno},
                    Street_Name:{post.streetname},
                    Area_Name:{post.areaname},
                    State_Name:{post.statename},
                    Pincode:{post.pincode},
                    Nationality:{post.nationality}
                    </div>)):
                    null
        }
      </div>
    )
  }
}
