import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Students } from '../shared/data/Students';
import { Classes } from '../shared/data/Classes';
import { Degrees } from '../shared/data/Degrees';
import { Matters } from '../shared/data/Matters';
import { Relationships } from '../shared/data/Relationships';
import { Teachers } from '../shared/data/Teachers';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  api: string = environment.API;
  

  constructor(private httpClient: HttpClient) { }

  getAllStudents(){
    const res = this.httpClient.get(`${this.api}students`);
    return res;
  }
  getAllClasses(){
    const res = this.httpClient.get(`${this.api}classes`);
    return res;
  }
  getAllDegrees(){
    const res = this.httpClient.get(`${this.api}degrees`);
    return res;
  }
  updateStudent(student){
    Students.push({
      "id":1000,
      "ra":12,
      "name":"asdasd",
      "degreeId":4,
      "classId":3
    })
  }
  getAllTeachers(){
    return Teachers;
  }

}
