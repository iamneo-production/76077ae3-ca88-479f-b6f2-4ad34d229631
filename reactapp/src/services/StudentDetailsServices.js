import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/view_details")
    }
    get(id){
        return http.get(`/studentDetails/${id}`);
    }
    create(data){
        return http.post("/add_details",data);
    }
   
   
}