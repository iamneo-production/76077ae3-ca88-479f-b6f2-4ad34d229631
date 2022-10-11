import http from "../http-common";

export default class UserDataService{
    getAll(){
        return http.get("/view_academy");
    }
    get(id){
        return http.get(`/academy/${id}`);
    }
    create(data){
        return http.post("/add_academy",data);
    }
    update(id,data){
        return http.put(`/academy/${id}`);
    }
}