import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { Classes } from 'src/app/models/classes';
import { Degrees } from 'src/app/models/degrees';
import { Matter } from 'src/app/models/matter';
import { Student } from 'src/app/models/student';
import { Teacher } from 'src/app/models/teacher';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-teacher-register',
  templateUrl: './teacher-register.component.html',
  styleUrls: ['./teacher-register.component.scss']
})
export class TeacherRegisterComponent implements OnInit {
  classes: Classes[];
  degreesList: Degrees[];
  teachers: Teacher[];
  matters: Matter[];
  student: Student;
  relationShipForm: FormGroup;
  degreeItems: FormArray;
  
  
  constructor(private appService: AppService, private fb: FormBuilder) {
    this.relationShipForm = fb.group({
      id: [""],
      teacherId: ["", Validators.required],
      matterId: ["", Validators.required],
      degrees: new FormArray([this.degreeTree()])
    });    
  }

  get degreesFormArray() {
    return this.relationShipForm.controls.degrees as FormArray;
  }

  private degreeTree(){
    return this.fb.group({
      degreeId: '',
      classes: new FormArray([])
    });
  }

  private addCheckDegrees() {
    this.degreesList.forEach(() => this.degreesFormArray.push(this.degreeTree()));    
  }

  ngOnInit(): void {
    this.getClasses();
    this.getDegrees();
    this.getTeachers();
    this.getMatters();  
    setTimeout(() => {
      this.addCheckDegrees();
    }, 1000);      
  }

  async getClasses(){
    this.appService.getAllClasses().subscribe((res: Classes[]) => {           
      this.classes = res;
    });    
  }
  async getDegrees(){
    this.appService.getAllDegrees().subscribe((res: Degrees[]) => {           
      this.degreesList = res;
    });    
  }
  async getTeachers() {
    this.appService.getAllTeachers().subscribe((res: Teacher[]) => {
      this.teachers = res;
    });
  }
  async getMatters() {
    this.appService.getAllMatters().subscribe((res: Matter[]) => {
      this.matters = res;
    });
  }

  saveData(){
    const selectedOrderIds = this.relationShipForm.value.degrees
      .map((checked, i) => checked ? this.degreesList[i].id : null)
      .filter(v => v !== null);
    console.log(selectedOrderIds);       
  }
}
