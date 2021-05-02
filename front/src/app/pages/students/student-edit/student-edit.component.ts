import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalPortalTargets } from '@sweetalert2/ngx-sweetalert2';
import { Classes } from 'src/app/models/classes';
import { Degrees } from 'src/app/models/degrees';
import { Student } from 'src/app/models/student';
import { AppService } from 'src/app/services/app.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss']
})
export class StudentEditComponent implements OnInit {
  id: string;
  studentForm: FormGroup;
  classes: Classes[];
  degrees: Degrees[];
  student: Student;

  constructor(
    fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private appService: AppService,
    public readonly swalTargets: SwalPortalTargets
  ) {
    this.studentForm = fb.group({
      id: [""],
      ra: ["", Validators.required],
      name: ["", Validators.required],
      degreeId: ["", Validators.required],
      classId: ["", Validators.required],   
    });
  }

  ngOnInit(): void {
    this.getClasses();
    this.getDegrees();
    this.id = this.route.snapshot.params['id'];        
    this.getStudentData(this.id);        
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
  async getStudentData(id){
    this.appService.getStudentById(id).subscribe((res: Student) => {           
      const {
        id,
        ra,
        name,
        degreeId,
        classId,
      } = res;
       
      this.studentForm.setValue({
        id,
        ra,
        name,
        degreeId,
        classId,
      });
    });    
  }

  async saveData(){
    const student = this.studentForm.value; 
    console.log(student);
     
    this.appService.updateStudent(student).subscribe((res: Student) => {           
      console.log(res);  
      Swal.fire({
        text: 'Dados atualizados!',
        icon: 'success',
      }).then(data => {
        this.router.navigate(['/students/all']);
      });    
    });  
  }

}
