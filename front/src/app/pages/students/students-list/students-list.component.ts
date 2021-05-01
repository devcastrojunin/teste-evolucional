import { Component, OnInit } from '@angular/core';
import { Classes } from 'src/app/models/classes';
import { Student } from 'src/app/models/student';
import { AppService } from 'src/app/services/app.service';
import { Degrees } from 'src/app/shared/data/Degrees';
import { Classes as ClasseJson } from '../../../shared/data/Classes';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent implements OnInit {
  students: Student[];
  classes: Classes[];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getSudents();
    this.getClasses();
  }

  async getSudents(){
    this.appService.getAllStudents().subscribe((res: Student[]) => {     
      const all = res.map( item => {
        return {
          ...item,
          class: ClasseJson.classes.find( c => c.id == item.classId).name,
          degree: Degrees.find( d => d.id == item.degreeId).name
        }
        
      })    
      
      this.students = all;
    });
    
  }

  async getClasses(){
    this.appService.getAllClasses().subscribe((res: Classes[]) => {     
      
      this.classes = res;
    });
    
  }
  getStudentByClass(id){
    console.log(id);
    this.students = this.students.filter( item => item.classId == id);
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
