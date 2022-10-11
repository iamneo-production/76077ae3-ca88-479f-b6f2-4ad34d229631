import http from "../http-common";

class UserDataService{
    getAll(){
        return http.get("/display");
    }
    get(id){
        return http.get(`/user/${id}`);
    }
    create(data){
        return http.post("/add",data);
    }
    update(id,data){
        return http.put(`/user/${id}`);
    }
   
}
