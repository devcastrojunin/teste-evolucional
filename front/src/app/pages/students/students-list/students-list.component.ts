import { Component, OnInit } from '@angular/core';
import { Classes } from 'src/app/models/classes';
import { Degrees } from 'src/app/models/degrees';
import { Student } from 'src/app/models/student';
import { AppService } from 'src/app/services/app.service';
import { Degrees as DegreesJson } from 'src/app/shared/data/Degrees';
import Swal from 'sweetalert2';
import { Classes as ClasseJson } from '../../../shared/data/Classes';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students: Student[];
  studentsList: Student[];
  classes: Classes[];
  degrees: Degrees[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getSudents();
    this.getClasses();
    this.getDegrees();
  }

  async getSudents(){
    this.appService.getAllStudents().subscribe((res: Student[]) => {     
      const all = res.map( item => {
        return {
          ...item,
          class: ClasseJson.classes.find( c => c.id == item.classId).name,
          degree: DegreesJson.find( d => d.id == item.degreeId).name
        }
        
      })    
      
      this.students = all;
      this.studentsList = this.students.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
    });
    
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
  
  getStudentByFilter(classId, degreeId){
    if(classId !== '' && degreeId == '')
      this.studentsList = this.students
        .filter( item => item.classId == classId)
        .sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
    else if(degreeId !== '' && classId == '')
      this.studentsList = this.students
        .filter( item => item.degreeId == degreeId)
        .sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
    else if(classId !== '' && degreeId !== '')
      this.studentsList = this.students
        .filter( item => item.classId == classId && item.degreeId == degreeId)
        .sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));    
    else
      this.getSudents();
  }

  async studentGenerator(){
    this.appService.createStudents(null).subscribe((res) => {           
      console.log(res);  
    });          
  }
}
