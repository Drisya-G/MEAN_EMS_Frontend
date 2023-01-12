import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders  } from '@angular/common/http';
import { Employee } from 'src/modals/employee.model';



// const options={
//   headers:new HttpHeaders()
// }

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  unshift(emp: Employee) {
    throw new Error('Method not implemented.');
  }
  baseUrl='http://localhost:3000/posts';
  // json-server --watch db.json


  userDetails: any = {       //object of objects
    1000: { uname:'diya',id:1000,email:'diya@gmail.com',pswd:1000 },
    1001: { uname:'miya',id:1001,email:'miya@gmail.com',pswd:1001},
    1002: { uname:'siya',id:1002,email:'siya@gmail.com',pswd:1002 },


  }
  currentId: any;
  currentuser: any;

  constructor(private http:HttpClient) { }

  saveDetails() {
    if (this.userDetails) {
      localStorage.setItem('dataBase', JSON.stringify(this.userDetails));
    }
    if (this.currentId) {
      localStorage.setItem('currentAcno', JSON.stringify(this.currentId));
    }

    if (this.currentuser) {
      localStorage.setItem('currentuser', JSON.stringify(this.currentuser));
    }
    
  }


  register(uname: any, id: any, email: any,pswd:any) {
    const data ={
      uname,
      id,
      email,
      pswd
    }
    return this.http.post('http://localhost:3001/register',data)

}

login(id: any, pswd: any) {
  const data={
    id,
    pswd
  }
  return this.http.post('http://localhost:3001/login',data)
}


// employee

  getEmployees() {
    return this.http.get<Employee[]>(this.baseUrl);
  }

  
  postEmployee(employee: Employee) {
    return this.http.post<Employee>(this.baseUrl, employee);
  }

  deleteEmployee(id: string) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}



//contact


// contactInfo() {
//   return this.http.get<Employee[]>(this.baseUrl);
// }