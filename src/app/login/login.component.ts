import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, ReactiveFormsModule, } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  id:any;
  pswd:any;

  loginForm = this.fb.group({
    id: ['', [Validators.required, Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })


  constructor(public router:Router,private fb:FormBuilder,private ds:ServiceService){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }




  // login(){
  //   alert('login successfull');
  //   this.router.navigateByUrl('dashboard');

  // }



  acnoChange(event: any) {
    //console.log(event);               in console ..there shown in target
    console.log(event.target.value);          //acno will print in console
    this.id = event.target.value;
  }

  pswdChange(event: any) {
    //console.log(event);
    console.log(event.target.value);
    this.pswd = event.target.value;         //for validation

  }


  login() {
    if (this.loginForm.valid) {          //validation  for submit button
      var id = this.loginForm.value.id;
      var pswd = this.loginForm.value.pswd;

      const result:any = this.ds.login(id, pswd)
        .subscribe((result:any)=>{
          localStorage.setItem('currentuser',JSON.stringify(result.currentuser))
          localStorage.setItem('currentId',JSON.stringify(result.currentid))
          // localStorage.setItem('token',JSON.stringify(result.token))

          alert(result.message)
          this.router.navigateByUrl('dashboard');
        },
        result=>{
          alert(result.error.message);
          this.router.navigateByUrl('');
        })

    }
  }

}
