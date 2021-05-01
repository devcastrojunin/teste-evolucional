import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { AppService } from 'src/app/services/app.service';
import { Degrees } from 'src/app/shared/data/Degrees';
import { Classes } from '../../../shared/data/Classes';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students: Student[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getSudents();
    this.appService.updateStudent(null);
  }

  getSudents(){
    const res = this.appService.getAllStudents();
    const all = res.map( item => {
      return {
        ...item,
        class: Classes.classes.find( c => c.id == item.classId).name,
        degree: Degrees.find( d => d.id == item.degreeId).name
      }
      
    })    
    
    this.students = all;
  }

  updateStudent(student){
    student;
    // {
    //   "id":1,
    //   "ra":12346,
    //   "name":"Nome do aluno 1",
    //   "degreeId":1,
    //   "classId":1
    // }
  }
}
