import axios from "axios"



export default axios.create({
    baseURL:"http://localhost:8080/api/admin",
     headers:{
     "Content-type":"application/json"
     }
});