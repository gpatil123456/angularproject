import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { observable, VirtualTimeScheduler } from 'rxjs';
import { user2 } from 'user2';
//import { apiservice } from 'apiservice';
{Injectable}
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private service:ApiserviceService,private router:ActivatedRoute) { }
  errormsg:any
  getparamid :any


  successmsg:any
userform=new FormGroup({
id:new FormControl('',Validators.required),
name:new FormControl('',Validators.required),

address:new FormControl('',Validators.required),
salary:new FormControl('',Validators.required),
});
// usersubmit(){
//   console.log(this.userform.value);
//   if(this.userform.valid)
//   {
//     console.log(this.userform.value);
//   }
//   else{
//     console.log("all field is required");
//     this.errormsg="all field is required";
//   }
// }
// usersubmit()
// {
// 	if(this.userform.valid)
// 	{
// 	  this.service.create(this.userform.value).subscribe((res)=>{

//          console.log(res,'res==>');
//          this.userform.reset();
// //this.successmsg = res.message;
//          this.successmsg='data sucessfully'

// 	  })

// 	}
//   else {
//     console.log("all fileds requried")
//     this.errormsg='all fields required'
//   }
// }




  ngOnInit():void{
this.getparamid=this.router.snapshot.paramMap.get('id')
//this.getparamid = this.router.snapshot.paramMap.get('id');
// this.service.getSingleData(this.getparamid).subscribe((res)=>{
//   console.log(res);
//   this.userform.patchValue({

//   id:res.data[0].id,
//   name:res.data[0].name,
//   address:res.data[0].address,
//   salary:res.data[0].salary,
//   });

// })

}

  // new(): void {
  //   this.submitted = false;
  //   this.apiservice = {
  //     id:'',
  //     name: '',
  //   address: '',
      
  //   };
  usersubmit()
{
	if(this.userform.valid)
	{
	  this.service.create(this.userform.value).subscribe((res)=>{

         console.log(res,'res=>');
        this.userform.reset();
this.successmsg=res.message;
         this.successmsg='data sucessfully'
         //console.log("data successfuly")

	  })

	}
  else {
    console.log("all fileds requried")
    this.errormsg='all fields required'
  }
}
ngOninit(){
  this.getparamid=this.router.snapshot.paramMap.get('id');
this.service.getSingleData(this.getparamid).subscribe((res)=>{
 console.log(res);
 this.userform.patchValue({

 //id:res.data[0].id,
 name:res.data[0].name,
 address:res.data[0].address,
 salary:res.data[0].salary
 });

})
}
userUpdate()
{
	console.log(this.userform.value)
	if(this.userform.valid)
	{
	   this.service.updateData(this.userform.value,this.getparamid).subscribe((res)=>{

	   console.log(res)

     this.successmsg=res.message
    // this.successmsg='data addd'
	   })
	}
	else
	{
	  this.errormsg ="all fields are required";
	}


	}

  
}


