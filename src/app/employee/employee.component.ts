import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/modals/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() onRemoveEmployee = new EventEmitter<number>();
  @Output() onEditEmployee = new EventEmitter<number>();
  constructor() {
    this.employee = {
      firstname: '',
      lastname: '',
      birthdate: '',
      gender: '',
      education: '',
      company: '',
      jobExperience: 0,
      salary: 0,
      profile: '',
    };

  }
  ngOnInit(): void {
    console.log(this.employee);
    
  }


deleteEmployeeClicked() {
  alert('Are you sure to delete ?')
  this.onRemoveEmployee.emit(this.employee.id);
}

editEmployeeClicked(){
  this.onEditEmployee.emit(this.employee.id);
}

}
