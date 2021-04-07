import { Component, OnInit } from '@angular/core';
import { FormArray,FormBuilder, FormControl, FormGroup, NgForm, NgModel } from '@angular/forms';
import { IemployeeSettings } from '../data/employee.model';
import { Observable, of } from 'rxjs';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})


export class EmployeeComponent implements OnInit {

  _languagelist:language[];

  originalEmployee: IemployeeSettings = {
    firstname:null,
    lastname:null,
    emailid:null,
    contactnumber:null,
    address:null,
    username:null,
    password:null,
    gender:null,
    Qualification:null,
    Experience:null,
    Language:null,
  };

  Employee:IemployeeSettings ={...this.originalEmployee}
  postError:boolean=false;
  postErrorMessage:string="";
  Qualification:Observable<string[]>;
  Experience:Observable<string[]>;
  Language: void;



  constructor(private dataservice:DataService) { }

  getLanguage(){

    this._languagelist=[
      {id:1,langname:"C/C++",isselected:false},
      {id:2,langname:"Java",isselected:false},
      {id:3,langname:"C#",isselected:false},
      {id:4,langname:"PHP",isselected:false},
      {id:5,langname:"Python",isselected:false},
    ]

  }

  onchange()
  {
    console.log(this._languagelist);
  }

  ngOnInit() {
    this.Qualification=this.dataservice.getQualification();
    this.Experience=this.dataservice.getExperience();
    this.Language=this.getLanguage();

    }

  onBlur(field: NgModel){
    console.log("in onBlur" ,field.valid);

  }


  onSubmit(form: NgForm)
  {
    console.log("in onSubmit:",form.value)
  }


}
class language {
  id:number;
  langname:string;
  isselected:boolean;
}
