import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { observable } from 'rxjs';
import { user2 } from 'user2';
//import { apiservice } from 'apiservice';
{HttpClient}
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
alldata:any
successmsg:any
//{
  //id:''
  //name:''
  //address:''
  // salary:''
// }
  constructor(private http:ApiserviceService) { }

  ngOnInit(): void {
    this.getAllData()
  //  this.http.getAll().subscribe(user=>{
    //  console.log(user);
    //  this.alldata=user;
  }
  //  });
   getAllData()
   {
    this.http.getAll().subscribe(user=>{
      console.log(user);
      this.alldata=user
   })
  }
    deleted(id:any){
       console.log(id,'delete==>');
        this.http.delete(id).subscribe((res)=>{
         console.log(res,'deleteres==>');
        this.successmsg=res.message;
      this.getAllData();
      
       });
     }
  //  }
   }




  // getAll(){
// this.apiservice.getAll().subscribe((res)=>{
  // console.log(res);
  // this.readdata=res.data
// })
  // }
  
  
  
  // retreive(){
  //   this.http.getAll().subscribe(data=>{
  //     this.use=data
  //     console.log(data)
  //   },error=>{
  //     console.log(error)
  //   }
  
  //   )
  // }


