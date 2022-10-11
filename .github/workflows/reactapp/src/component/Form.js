
import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";
 import Login from './Login';
 import {NavLink,BrowserRouter as Router,Routes,Route,redirect, isRouteErrorResponse} from "react-router-dom"
 import NavBar from './NavBar';
  import {useNavigate} from "react-router-dom"
  import {Nav} from "react-bootstrap"
  import '../App.css';
  import validator from "validator";


 

 function Form() {
    let navigate=useNavigate()

    
    const[user,setUser]=useState({
        username:"",
        email:"",
        userRole:"",
        phone:"",
        password:"",
        confirmpassword:"",

    });
     
    
    const[formErrors,setFormErrors]=useState({});
    const[isSubmit,setIsSubmit]=useState(false);
    const{username,email,phone,password,confirmpassword,userRole}=user;

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
       
    };
 
    const submithandler=async(e)=>{
     
         e.preventDefault();
        setFormErrors(validate(user));
        setIsSubmit(true);
         if(phone.length!=10){
          alert(`number should be 10 digits`);
         }
    if(userRole===""){
      if(password===confirmpassword && phone.length===10){
           alert(`registration successfull`)
           console.log("registration successfull");        
      await axios.post("http://localhost:8080/api/add",user)
      
          navigate("/Login")
      }
        else{
         
           alert(` registration failed`)
             console.log("password not matching");
         }

    }
    else{
      if(password===confirmpassword && phone.length===10){
        alert(`registration successfull`)
        console.log("registration successfull");
      await axios.post("http://localhost:8080/api/add_Admin",user)
             navigate("/Login")
      }
      else{
        alert(` registration failed`)
          console.log("password not matching");
      }

    }
        
    };
    useEffect(()=>{
      console.log(formErrors);
     if(Object.keys(formErrors).length===0 && isSubmit){
      console.log(user);
     }
    },[formErrors])
    const validate=(values)=>{
     const errors={};
     const regex=/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
     if(!values.username){
       errors.username="Username is required!";

     }
     if(!values.userRole){
      errors.userRole="UserRole is required!";

    }
     if(!values.email){
      errors.email="Email is required!";
      
    }else if(regex.test(values.email)){
      errors.email="This is not a valid email format!";
    }
    if(!values.phone){
      errors.phone="phone is required!";
      
    }
    if(!values.password){
      errors.password="Password is required!";
      
    }
    return errors;
    };
   

  return (
    <div className="container">
       {Object.keys(formErrors).length===0 && isSubmit?(<div className='ui message success'>Signed in successfully</div>
       ):(
        <pte>{JSON.stringify(user,undefined,2)}</pte>
       )} 
             <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                <form action="action_page.php" onSubmit={(e)=>submithandler(e)}>
                 <h1 className="text-center m-4" style={{color: "red",backgroundColor: "lightblue"}}>Registration Form</h1>
                
               <select id="user/admin" style={{backgroundColor: "lightblue"}}>
                 <option>user</option>
                <option>admin</option>
               </select> <br />
               <input type="userRole" style={{backgroundColor: "lightblue"}} value={userRole} onChange={(e)=>onInputChange(e)} name="userRole" placeholder="userRole"/>
               <p>{formErrors.userRole}</p> <br />
                 <input type="text" value={username} onChange={((e)=>onInputChange(e))} name="username" placeholder="username"/>  
                 <p>{formErrors.username}</p><br />
               
                 <input type="text" value={email} onChange={((e) => onInputChange(e))} name="email" 
                 placeholder="email"  />
                 <p>{formErrors.email}</p><br />
               
                 <input type="text" value={phone} onChange={(e)=>onInputChange(e)} name="phone" placeholder="phone" /> 
                 <p>{formErrors.phone}</p><br />
              
                 <input type="password" value={password} onChange={(e)=>onInputChange(e)} name="password" placeholder="password" />
                 <p>{formErrors.password}</p> <br />
              
                 <input type="password" value={confirmpassword} onChange={(e)=>onInputChange(e)} name="confirmpassword" placeholder="confirmpassword"/> <br />
                
                 <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginRight:"1em",marginTop:"1em",marginBottom:"1em",marginLeft:"1em"}}>
               Submit
             </button> <br />
               
    
              
           
              <Routes>
                 <Route path="/login" element={<Login/>}>
                     Login
                 </Route>
             
             </Routes>   
              <div>Already user?</div>
                 <a id="LoginLink" href="/Login">Login</a>
                 
                   </form>
                 </div> 
               
              </div> 
               </div>
                 
               
               
          
  )
}
export default Form;
