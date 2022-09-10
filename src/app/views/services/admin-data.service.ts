import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {

  constructor(private http:HttpClient) { }


  getTasksToday(){
    let token = localStorage.getItem('token')
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/task/dashboard/tasksfrotoday',{headers:headers})
  }

  getTasksDone(){
    let token = localStorage.getItem('token')
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/task/dashboard/tasksDone',{headers:headers})
  }

  getTasksLate(){
    let token = localStorage.getItem('token')
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/task/dashboard/tasksLate',{headers:headers})
  }

  getChartInfos(){
    let token = localStorage.getItem('token')
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/task/dashboard/chart',{headers:headers})
  }

  getUser(token:any,id:any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/user/'+id,{headers:headers})
  }

  getImage(token:any,id:any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/user/image/'+id,{headers:headers,responseType:'blob'})
  }

  getAllUsers(token:any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/user',{headers:headers})
  }

  getNbTasksPerUser(token:any,id:any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/task/nbTasks/'+id,{headers:headers})
  }

  deleteUser(token:any,id:any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.delete('http://localhost:8080/user/'+id,{headers:headers})
  }

  getAllTasks(token:any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/task',{headers:headers})
  }

  deleteTask(token:any,id:any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.delete('http://localhost:8080/task/'+id,{headers:headers})
  }

  getID(token:any,username:any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.get('http://localhost:8080/user/username/'+username,{headers:headers})
  }

  addTask(token:any,task:Object){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.post('http://localhost:8080/task',task,{headers:headers})
  }

  assignTaskToUser(token:any,idT:any,idU:any){
    const headers = new HttpHeaders({ 'Authorization': 'Bearer '+token });
    return this.http.post('http://localhost:8080/task/'+idT+'/user/'+idU,null,{headers:headers})
  }

}
