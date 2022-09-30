import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/view");
    }
    get(id){
        return http.get(`/course/${id}`);
    }
    create(data){
        return http.post("/add",data);
    }
   
   

   
}