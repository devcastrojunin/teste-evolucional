import { Component, OnInit } from '@angular/core';
import { LoaderHelper } from 'src/app/helpers/loaderHelper';
import { Classes } from 'src/app/models/classes';
import { Degrees } from 'src/app/models/degrees';
import { Matter } from 'src/app/models/matter';
import { Teacher } from 'src/app/models/teacher';
import { AppService } from 'src/app/services/app.service';

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

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.getMatters();
    this.getTeachers().then(res => {
      this.getRelationships();      
    });
    this.getClasses();
    this.getDegrees();
  }

  getRelationships() {    
    this.appService.getAllRelationships().subscribe((res: any[]) => {
      let listConcat = [];     
      
      res.forEach( relation => {
        let teacher = this.relationShipList.find(t => t.id === relation.teacherId).name;
        let matter = this.matters.find(m => m.id === relation.matterId).name;

        listConcat.push({
          id: relation.id,
          teacher,
          matter, 
          degrees: relation.degrees
        });        
      })
      this.relationShipList = listConcat;
    });
  }
  getDegree(degreeId){
    return this.degrees.find(d => d.id == degreeId);    
  }
  getClassesName(classId){    
    return this.classes.find(c => c.id == classId);    
  }
  async getTeachers() {
    this.loaderHelper.show();
    this.appService.getAllTeachers().subscribe((res: Teacher[]) => {
      this.relationShipList = res;
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
  async getMatters() {
    this.appService.getAllMatters().subscribe((res: Matter[]) => {
      this.matters = res;
    });
  }

}
