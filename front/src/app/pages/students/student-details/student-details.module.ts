import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDetailsComponent } from './student-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StudentDetailsComponent
  }
];

@NgModule({
  declarations: [
    StudentDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentDetailsModule { }
