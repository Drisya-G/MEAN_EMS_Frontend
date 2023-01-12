import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/modals/employee.model';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {
  // @Input() employee: Employee;
employeeList:any;


  constructor(private httpClient:HttpClient) {
    this.employeeList=[];
   
  }

  ngOnInit(): void {
    // console.log(this.employee);
    this.getEmployeeList();
  }


  getEmployeeList(){
    this.httpClient.get('http://localhost:3000/posts').subscribe((result:any)=>{
      this.employeeList=result;
    }
    )
  }

}
