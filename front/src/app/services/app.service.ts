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
  getStudentById(id){
    const res = this.httpClient.get(`${this.api}students/${id}`);
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
    const res = this.httpClient.put(`${this.api}students/${student.id}`, student);
    return res;
  }
  getAllTeachers(){
    return Teachers;
  }

  createStudents(student){
    const res = this.httpClient.post(`${this.api}students`, student);
    return res;
  }
}
