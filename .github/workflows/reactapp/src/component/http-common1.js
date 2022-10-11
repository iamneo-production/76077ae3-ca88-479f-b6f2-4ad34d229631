import axios from "axios"



export default axios.create({
    baseURL:"http://localhost:8080/api/login",
     headers:{
     "Content-type":"application/json"
     }
});