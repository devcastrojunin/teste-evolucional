import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderHelper } from 'src/app/helpers/loaderHelper';
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
  loaderHelper: LoaderHelper = new LoaderHelper();
  students: Student[];
  studentsList: Student[];
  classes: Classes[];
  degrees: Degrees[];
  lastIdStudent: any;

  //Pagination
  totalItems = 0;
  activePage: number;
  page = 1;
  itensPerPage: number = 30;

  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.getSudents('', '', 1);
    this.getClasses();
    this.getDegrees();
  }

  async getSudents(classId, degreeId, page: number) {
    this.loaderHelper.show();
    this.page = page;
    this.appService.getStudentsByFilter({ degreeId, classId }).subscribe((res: Student[]) => {
      const all = res.map(item => {
        return {
          ...item,
          class: ClasseJson.classes.find(c => c.id == item.classId).name,
          degree: DegreesJson.find(d => d.id == item.degreeId).name
        }

      })

      this.lastIdStudent = res.slice(-1);
      this.totalItems = res.length;
      this.activePage = page;
      this.students = all;
      this.studentsList = this.students.sort((a, b) => a.name.toUpperCase().localeCompare(b.name.toUpperCase()));
      this.loaderHelper.close();
    });
  }

  async getClasses() {
    this.appService.getAllClasses().subscribe((res: Classes[]) => {

      this.classes = res;
    });
  }
  async getDegrees() {
    this.appService.getAllDegrees().subscribe((res: Degrees[]) => {
      this.degrees = res;
    });
  }


  async studentGenerator() {
    this.loaderHelper.show();
    let lastId = this.lastIdStudent[0].id;
    console.log('lastId: ', lastId);

    let listNewStudents = [];

    for (let index = 0; index < 300; index++) {
      let classIdList = [1, 2, 3, 4, 5, 6];
      let degreeIdList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
      let ra = this.getRandom(1, 50000);
      let classId = classIdList[Math.floor(Math.random() * classIdList.length)];
      let degreeId = degreeIdList[Math.floor(Math.random() * degreeIdList.length)];
      let id = ++lastId;

      let obj = {
        id,
        ra,
        name: `Nome do aluno ${id}`,
        degreeId,
        classId
      }
      listNewStudents.push(obj);
    }

    this.appService.createStudents(listNewStudents).subscribe((res) => {
      this.loaderHelper.close();
      Swal.fire({
        text: 'Novos estudantes adicionados com sucesso!',
        icon: 'success',
      }).then(data => {
        this.router.navigate(['/home']);
      });
    });
  }
  getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
