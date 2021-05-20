import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'todos',
        loadChildren: () => import('./students-list/students-list.module').then(m => m.StudentsListModule)
      },
      {
        path: 'editar/:id',
        loadChildren: () => import('./student-edit/student-edit.module').then(m => m.StudentEditModule)
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
