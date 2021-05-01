import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'all',
        loadChildren: () => import('./students-list/students-list.module').then(m => m.StudentsListModule)
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./student-edit/student-edit.module').then(m => m.StudentEditModule)
      },
      {
        path: 'details/:id',
        loadChildren: () => import('./student-details/student-details.module').then(m => m.StudentDetailsModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class StudentsModule { }
