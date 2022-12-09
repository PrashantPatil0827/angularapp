import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-simpletemplateform',
  templateUrl: './simpletemplateform.component.html',
  styleUrls: ['./simpletemplateform.component.css']
})
export class SimpletemplateformComponent implements OnInit {
  defaultValue:string="Angular"
  employee= new Employee();
  submitted:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  OnSubmit(form:NgForm){
this.submitted=true;
this.employee.course=form.value.course;
this.employee.username=form.value.userDetails.username;
this.employee.email=form.value.userDetails.email;
this.saveEmployeeData(this.employee);
}
  saveEmployeeData(emp:Employee){
console.log(emp.course);
console.log(emp.email);
console.log(emp.username);
}
}
