import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit ,AfterViewInit{

  // uname=''
  // email=''
  // message=''

  contactForm = this.fb.group({    
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]], 
    email:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    message: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9 ]*')]], 

  })
  employeesToDisplay: any;
  employees: any;
  message:any;
  msg: any;


  constructor(private fb:FormBuilder){}
  ngAfterViewInit(): void {
   

  }
  ngOnInit(): void {
    // this.contactForm = this.fb.group({
    //   uname: this.fb.control(''),
    //   email: this.fb.control(''),
    //   message: this.fb.control('')
    // });
  }



  sendmsg(){
    if (this.contactForm.valid) {          
      var message=this.contactForm.value.message;
      console.log(message);
      localStorage.setItem('contact', JSON.stringify(message));

      if(localStorage.getItem('contact')){
        this.msg = JSON.parse(localStorage.getItem('contact') || '')
        }
       
    console.log(localStorage);
    // alert('Message Successfully Sent')

    }
    else{
      alert('input valid data')
    }
  }


}
