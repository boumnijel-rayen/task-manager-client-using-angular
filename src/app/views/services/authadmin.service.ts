import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthadminService {
  dataRes:any;
  helper = new JwtHelperService();
  constructor(private http:HttpClient, private route:Router) { }

  signIn(username:string,password:string){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let body = `username=${username}&password=${password}`;
    return this.http.post('http://localhost:8080/login',body,{headers:headers})
  }

  saveData(token:string){
    localStorage.setItem('token',token)
    let username = this.helper.decodeToken(token).sub
    let roles = this.helper.decodeToken(token).roles
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    let data = this.http.get('http://localhost:8080/user/username/'+username,{headers:headers})
    data.subscribe(response => {
      this.dataRes = response;
      localStorage.setItem('id',this.dataRes)
    })
    if (roles.includes('ROLE_ADMIN')){
      this.route.navigate(['/admin'])
      return false
    }else{
      return true
    }
  }

  connected(){
    if (localStorage.getItem('token') == null){
      return false
    }
    let token:any = localStorage.getItem('token')
    let roles = this.helper.decodeToken(token).roles
    if (this.helper.isTokenExpired(token)){
      return false
    }
    if (!roles.includes('ROLE_ADMIN')){
      return false
    }
    return true
  }
}
