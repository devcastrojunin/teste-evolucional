import { Injectable } from '@angular/core';

import { Students } from '../shared/data/Students';
import { Classes } from '../shared/data/Classes';
import { Degrees } from '../shared/data/Degrees';
import { Matters } from '../shared/data/Matters';
import { Relationships } from '../shared/data/Relationships';
import { Teachers } from '../shared/data/Teachers';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getAllStudents(){
    return Students;
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
