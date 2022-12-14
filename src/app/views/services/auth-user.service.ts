import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  dataRes:any;
  helper = new JwtHelperService();
  constructor(private http:HttpClient,private route:Router) { }

  signIn(username:string,password:string){
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let body = `username=${username}&password=${password}`;
    return this.http.post('http://localhost:8080/login',body,{headers:headers})
  }

  saveData(token:string){
    localStorage.setItem('tokenU',token)
    let username = this.helper.decodeToken(token).sub
    let roles = this.helper.decodeToken(token).roles
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    let data = this.http.get('http://localhost:8080/user/username/'+username,{headers:headers})
    data.subscribe(response => {
      this.dataRes = response;
      localStorage.setItem('idU',this.dataRes)
      if (roles.includes('ROLE_USER')){
        this.route.navigate(['/user'])
      }else{
        localStorage.removeItem('idU')
      }
    })
    if (roles.includes('ROLE_USER')){
      return false
    }else{
      localStorage.removeItem('tokenU')
      return true
    }
  }

  connected(){
    if (localStorage.getItem('tokenU') == null){
      return false
    }
    let token:any = localStorage.getItem('tokenU')
    let roles = this.helper.decodeToken(token).roles
    if (this.helper.isTokenExpired(token)){
      return false
    }
    if (!roles.includes('ROLE_USER')){
      return false
    }
    return true
  }
}
