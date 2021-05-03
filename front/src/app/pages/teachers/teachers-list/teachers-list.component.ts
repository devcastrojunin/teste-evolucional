import { Component, OnInit } from '@angular/core';
import { LoaderHelper } from 'src/app/helpers/loaderHelper';
import { Classes } from 'src/app/models/classes';
import { Degrees } from 'src/app/models/degrees';
import { Matter } from 'src/app/models/matter';
import { Student } from 'src/app/models/student';
import { Teacher } from 'src/app/models/teacher';
import { AppService } from 'src/app/services/app.service';
import { ModalService } from 'src/app/shared/components/modal/modal.service';

@Component({
  selector: 'app-teachers-list',
  templateUrl: './teachers-list.component.html',
  styleUrls: ['./teachers-list.component.scss']
})
export class TeachersListComponent implements OnInit {
  loaderHelper: LoaderHelper = new LoaderHelper();
  relationShipList: Teacher[];
  classes: Classes[];
  degrees: Degrees[];
  matters: Matter[];
  students: Student[];
  bodyText: string;
  degreeDataModal: any = '';

  constructor(private appService: AppService, private modalService: ModalService) { }

  ngOnInit(): void {
    this.getMatters();
    this.getTeachers();
    this.getClasses();
    this.getDegrees();

    setTimeout(() => {
      this.getRelationships();
    }, 1000);

    this.bodyText = 'This text can be updated in modal 1';

  }

  getRelationships() {
    this.appService.getAllRelationships().subscribe((res: any[]) => {
      let listConcat = [];

      res.forEach(relation => {
        let teacher = this.relationShipList.find(t => t.id == relation.teacherId).name;
        let matter = this.matters.find(m => m.id == relation.matterId).name;

        listConcat.push({
          id: relation.id,
          teacher,
          matter,
          degrees: relation.degrees
        });
      })
      this.relationShipList = listConcat;
      this.loaderHelper.close();
    });
  }
  getDegree(degreeId) {
    return this.degrees.find(d => d.id == degreeId);
  }
  getClassesName(classId) {
    return this.classes.find(c => c.id == classId);
  }
  async getTeachers() {
    this.loaderHelper.show();
    this.appService.getAllTeachers().subscribe((res: Teacher[]) => {
      this.relationShipList = res;      
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
  async getMatters() {
    this.appService.getAllMatters().subscribe((res: Matter[]) => {
      this.matters = res;
    });
  }
  async getSudents(degree) {
    this.appService.getAllStudents().subscribe((res: any[]) => {
      this.students = res.filter(s => s.degreeId == degree.degreeId);       
    });
  }

  openModal(id: string, degree) {
    this.getSudents(degree);
    this.degreeDataModal = degree;
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
