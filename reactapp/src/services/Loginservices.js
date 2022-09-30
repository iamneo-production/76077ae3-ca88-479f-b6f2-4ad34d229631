import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/view_login")
    }
    
    create(data){
        return http.post("/add_login",data);
    }
   
   
}
