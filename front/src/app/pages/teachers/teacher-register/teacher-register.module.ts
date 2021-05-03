import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherRegisterComponent } from './teacher-register.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: TeacherRegisterComponent
  }
];

@NgModule({
  declarations: [
    TeacherRegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class TeacherRegisterModule { }
