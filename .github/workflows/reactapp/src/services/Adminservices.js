import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/display_Admin");
    }
    get(id){
        return http.get(`/admin/${id}`);
    }
    create(data){
        return http.post("/add_Admin",data);
    }
    update(id,data){
        return http.put(`/admin/${id}`);
    }
   
}