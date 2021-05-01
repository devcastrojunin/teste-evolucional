import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentEditComponent } from './student-edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: StudentEditComponent
  }
];

@NgModule({
  declarations: [StudentEditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class StudentEditModule { }
