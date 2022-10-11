
import axios from 'axios';
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import {NavLink,BrowserRouter as Router,Routes,Route,redirect} from "react-router-dom"
import AdminDashboard from './AdminDashboard';
import Form from './Form';
import validator from 'validator';


export default function Login() {
  let navigate=useNavigate()
  const [user,setUser]=useState({
    email:"",
    password:"",
    userRole:"",
  });
  const{email,password,userRole}=user;
  const[formErrors,setFormErrors]=useState({});
  const[isSubmit,setIsSubmit]=useState(false);

  const onInputChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  };
  

  const onSubmit=async(e)=>{
    alert(`Logged in Successfully`)
    e.preventDefault();
    setFormErrors(validate(user));
    setIsSubmit(true);
     await axios.post("http://localhost:8080/api/add_login",user)
     if(userRole==="user"){
     navigate("/NavBar")
     }
     else{
      navigate("/AdminDashboard")
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
     if(!values.userRole){
      errors.userRole="UserRole is required!";

    }
     if(!values.email){
      errors.email="Email is required!";
      
    }else if(regex.test(values.email)){
      errors.email="This is not a valid email format!";
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
            <form onSubmit={(e)=>onSubmit(e)}>
             <h1 className="text-center m-4" style={{color: "blue",backgroundColor: "lightblue"}}>Login</h1>
             <select id="user/admin" style={{backgroundColor: "lightblue"}}>
                 <option>user</option>
                <option>admin</option>
               </select> <br />
               <input
              type="text"
              value={userRole}
              onChange={(e)=>onInputChange(e)}
              name="userRole"
              placeholder="userRole" 
              /> <p>{formErrors.userRole}</p> <br />
              <input
              type="text"
              value={email}
              onChange={(e)=>onInputChange(e)}
              name="email"
              placeholder="email" 
              />  <p>{formErrors.email}</p> <br />
              <input
              type="password"
              value={password}
              onChange={(e)=>onInputChange(e)}
              name="password"
              placeholder="password" 
               /> <br />
              <button style={{backgroundColor: "#1976d2",color:"#fff",borderRadius:"20px",padding:"0.6em 2em",border:"0",cursor:"pointer",margin:"1em",marginRight:"1em",marginTop:"1em",marginBottom:"1em",marginLeft:"1em"}}>
               Submit
             </button>
             <div>New user/admin?</div>
              <div click className="card-link" to="/Login">
                <a id="Form_btn" href="/Form">Form</a>
                 </div>
              <Routes>
                 <Route path="/NavBar" element={<NavBar/>}>
                     NavBar
                 </Route>
                 <Route path="/AdminDashboard" element={<AdminDashboard/>}>
                     AdminDashboard
                 </Route>
                 <Route path="/Form" element={<Form/>}>
                     Form
                 </Route>
             
             </Routes>    
             </form>
           </div>
           </div>
           </div>
  )
}
