import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpModule } from '../user/sign-up/sign-up.module';
import { SignUpComponent } from '../user/sign-up/sign-up/sign-up.component';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {

  constructor(private http:HttpClient) { }

  getDonePerUser(token:any,id:any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/task/Done/user/'+id,{headers:headers})
  }
  
  getRetardPerUser(token:any,id:any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/task/retard/user/'+id,{headers:headers})
  }
  
  getcoursPerUser(token:any,id:any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/task/cours/user/'+id,{headers:headers})
  }

  isExiste(username:string){
    return this.http.get('http://localhost:8080/existe/'+username)
  }

  addUser(formData:FormData){
    return this.http.post('http://localhost:8080/user',formData,{
      reportProgress:true,
      observe:'events'
    })
  }
}
