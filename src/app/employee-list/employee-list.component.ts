import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import {Employee} from '../employee'
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  constructor(private employeeService: EmployeeService,private router:Router) { }

  ngOnInit(): void {
    this.getEmployees();

    // this.employees=[{
    //   "id":1,
    //   "firstName":"Chirag",
    //   "lastName":"Pilavare",
    //   "email":"chirag@gmail.com"
    // },{
    //   "id":2,
    //   "firstName":"Chirag",
    //   "lastName":"Pilavare",
    //   "email":"chirag@gmail.com"
    // }];
  }
  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data=>{
      this.employees = data;
    });
    
  }
   updateEmployee(id:number){
    this.router.navigate(['update-employee',id]);
  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmployee(id).subscribe(data=>{
      console.log(data);
      this.getEmployees();
    })
}
employeeDetails(id:number){
  this.router.navigate(['employee-details',id]);
  }


}
