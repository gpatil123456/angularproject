import { Injectable } from '@angular/core';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { user2} from 'user2';
import { FormsModule } from '@angular/forms';


const baseUrl='http://localhost:4000/user2';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http:HttpClient) { }
  getAll():Observable<user2[]>{
    return this.http.get<user2[]>
    (baseUrl);
  }
  // get(id: any): Observable<user2>{
  //   return this.http.get(`${baseUrl}/${id}`);
  // }
  create(data:any):Observable<any>
  {
    console.log(data,'createapi==>');
    
    return this.http.post(baseUrl,data);
  }
  delete(id: any): Observable<any> {
    let ids=id;
    return this.http.delete(`${baseUrl}/${ids}`);
  }
  
 
  updateData(data:any, id:any): Observable<any> {
    let ids=id
    return this.http.put(`${baseUrl}/${ids}`, data);
  }
  getSingleData(id:any):Observable<any>
  {
   let ids=id; 
    return this.http.get(`${baseUrl}/${ids}`);
  }

// updataData(data:any,id:any)
// {
// 	let ids = id;
//   return this.http.put(`${baseUrl}/${id}`, data);

// }
}
