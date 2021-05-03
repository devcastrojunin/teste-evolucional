import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersEditComponent } from './teachers-edit.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TeachersEditComponent
  }
];


@NgModule({
  declarations: [
    TeachersEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TeachersEditModule { }
