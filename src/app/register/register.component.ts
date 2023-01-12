import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent  implements OnInit{

  registerForm = this.fb.group({    
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]], 
    id:['',[Validators.required, Validators.pattern('[0-9]*')]], 
    email:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]

  })



  constructor(public router:Router,private fb:FormBuilder,private ds:ServiceService){}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  


  register() {
     console.log(this.registerForm);
    if (this.registerForm.valid) {       
      var uname = this.registerForm.value.uname;
      var id = this.registerForm.value.id;
      var email = this.registerForm.value.email;
      var pswd = this.registerForm.value.pswd;
      const result = this.ds.register( uname,id,email, pswd)
      .subscribe((result:any)=>{
        alert(result.message);
        this.router.navigateByUrl('login')
      },
      result=>{
        alert(result.error.message);
        this.router.navigateByUrl('register')
      }
      
      )

    }
    else {
      alert('input valid data');
      console.log(this.registerForm.get('email')?.errors); 

    }
  }
}
