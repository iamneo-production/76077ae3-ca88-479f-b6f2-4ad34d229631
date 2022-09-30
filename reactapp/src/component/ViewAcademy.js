
 import React, { useEffect, useState } from 'react'
import axios from 'axios';



export default function ViewAcademy() {
  const [users,setUser]= useState([])
  const [academyname,setAcademyname]=useState("");
  const [contactnumber,setContactnumber]=useState("");
  const[imageurl,setImageurl]=useState("");
  const[emailid,setEmailid]=useState("");
  const[academylocation,setAcademylocation]=useState("");
  const[academydescription,setAcademydescription]=useState("");
  const[userId,setUserId]=useState(null)

  useEffect(()=>{
    getUsers();
  },[])
  function getUsers(){
    fetch("http://localhost:8080/api/view_academy").then((result)=>{
      result.json().then((resp)=>{
        setUser(resp)
        setAcademyname(resp[0].academyname)
        setContactnumber(resp[0],contactnumber)
        setEmailid(resp[0],emailid)
        setImageurl(resp[0],imageurl)
        setAcademylocation(resp[0],academylocation)
        setAcademydescription(resp[0],academydescription)
      })
    })
  }
  function deleteUser(id){
     fetch("http://localhost:8080/api/academy/"+id,{
      method:"DELETE"
     }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        getUsers()
      })
     
     })
  }
  function update()
  {
    let item={academyname,emailid,contactnumber,imageurl,academylocation,academydescription}
    console.warn("item",item)
    fetch("http://localhost:8080/api/academy/"+userId,{
      method:"PUT",
      headers:{
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(item)
     }).then((result)=>{
      result.json().then((resp)=>{
        console.warn(resp)
        getUsers()
      })
     
     })

  }

 

  
  function selectUser(id){
    let item=users[id-1];
    setAcademyname(item.academyname)
    setContactnumber(item.contactnumber)
    setImageurl(item.imageurl)
    setEmailid(item.emailid)
    setAcademylocation(item.academylocation)
    setAcademydescription(item.academydescription)
  }

  return (
    <div className='App'>
      <h1 style={{backgroundColor:"lightblue"}}>View Academy</h1>
      <table border="1" style={{float:"left"}}>
        <tbody>
          <tr style={{backgroundColor:"lightgreen"}}>
          <td>ID</td>
                   <td>Academy_Name</td>
                   <td>Contact_Number</td>
                   <td>Academy_Location</td>
                   <td>Image_Url</td>
                   <td>Email_Id</td>
                   <td>Academy_Description</td>
          </tr>
          {
            users.map((item,i)=>
            <tr key={i}>
              <td>{item.id}</td>
              <td>{item.academyname}</td>
              <td>{item.contactnumber}</td>
              <td>{item.academylocation}</td>
              <td>{item.imageurl}</td>
              <td>{item.emailid}</td>
              <td>{item.academydescription}</td>
              <td><button style={{backgroundColor:"lightgreen"}} onClick={()=>deleteUser(item.id)}>Delete</button></td>
               <td><button style={{backgroundColor:"lightgreen"}} onClick={()=>selectUser(item.id)}>Update</button></td> 
            </tr>
            )
          }
        </tbody>
      </table>
      <div>
        <input type="text" value={academyname} onChange={(e)=>{setAcademyname(e.target.value)}} /> <br /><br />
        <input type="text" value={contactnumber} onChange={(e)=>{setContactnumber(e.target.value)}} /><br /><br />
        <input type="text" value={imageurl} onChange={(e)=>{setEmailid(e.target.value)}}/><br /><br />
        <input type="text" value={emailid} onChange={(e)=>{setImageurl(e.target.value)}}/><br /><br />
        <input type="text" value={academylocation} onChange={(e)=>{setAcademylocation(e.target.value)}}/><br /><br />
        <input type="text" value={academydescription} onChange={(e)=>{setAcademydescription(e.target.value)}} /><br /><br />
        <button style={{backgroundColor:"lightgreen"}} onClick={update}>Update User</button>
      </div>
    </div>
  )
}


