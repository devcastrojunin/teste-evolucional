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
  degrees: Degrees[];
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
      degrees: this.fb.array([this.createDegreeArray()])
    });
  }

  createDegreeArray():FormGroup{
    return this.fb.group({
      degreeId: null,
      classes: new FormArray([])
    });
  }
  
  addDegree(): void{
    this.degreeItems = this.relationShipForm.get('degrees') as FormArray;
    this.degreeItems.push(this.createDegreeArray());
  }

  ngOnInit(): void {
    this.getClasses();
    this.getDegrees();
    this.getTeachers();
    this.getMatters();
  }

  async getClasses(){
    this.appService.getAllClasses().subscribe((res: Classes[]) => {           
      this.classes = res;
    });    
  }
  async getDegrees(){
    this.appService.getAllDegrees().subscribe((res: Degrees[]) => {           
      this.degrees = res;
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

  selectDegreeChange(e) {
    const checkArray: FormArray = this.relationShipForm.get('degrees') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl({degreeId: e.target.value}));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
  selectClassChange(e) {
    const checkArray: FormArray = this.relationShipForm.get('classes') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl({degreeId: e.target.value}));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  saveData(){
    console.log(this.relationShipForm.value);    
  }
}
